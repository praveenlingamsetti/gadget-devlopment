import React, { useState, useEffect } from "react";
import { Card, Layout, Page, TextField, Pagination, DataTable, Button, BlockStack } from "@shopify/polaris";
import { api } from "../api";

export default function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [shopId, setShopId] = useState("");
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [showMore, setShowMore] = useState({});
  const rowsPerPage = 3;

  // Fetch shop ID
  const fetchShopId = async () => {
    try {
      const result = await api.shopifyShop.findMany({
        first: 1, // Assuming one shop per session
      });

      if (result && result.length > 0) {
        const shopId = result[0].id;
        console.log("Shop ID:", shopId);
        setShopId(shopId);
      } else {
        console.error("No shop data found");
      }
    } catch (error) {
      console.error("Error fetching shop data:", error);
    }
  };

  // Fetch all results for the current shop ID
  const fetchAllResults = async (shopId) => {
    try {
      let allRecords = [];
      let hasNextPage = true;
      let cursor = null;

      while (hasNextPage) {
        const response = await api.draftedProduct.findMany({
          first: 250,
          after: cursor,
          filter: { shop: { equals: shopId } }, // Filter by shopId
        });

        const results = response;
        const pageInfo = response.pagination.pageInfo;

        if (results && results.length > 0) {
          allRecords.push(...results);
          cursor = pageInfo.endCursor;
          hasNextPage = pageInfo.hasNextPage;
        } else {
          hasNextPage = false;
        }
      }

      console.log("Fetched all results:", allRecords);
      return allRecords;
    } catch (error) {
      console.error("Error fetching results:", error);
      throw error;
    }
  };

  const fetchResults = async () => {
    try {
      setLoading(true);
      if (shopId) {
        const fetchedResults = await fetchAllResults(shopId);
        setAllResults(fetchedResults);
      }
    } catch (err) {
      setFetchError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchShopAndResults = async () => {
      await fetchShopId(); // Fetch shopId first
      await fetchResults(); // Fetch results after shopId is set
    };

    fetchShopAndResults();
  }, [shopId]);

  // Handle search input change
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // Clear search input
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filter results based on search term
  const filteredOrders = allResults.filter((order) => order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) || order.productTitle.toLowerCase().includes(searchTerm.toLowerCase())).slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const totalPages = Math.ceil(allResults.length / rowsPerPage);

  if (loading) return <div>Loading...</div>;
  if (fetchError) return <div>Error fetching data</div>;

  return (
    <Page title="Drafted Orders">
      <Layout>
        <Layout.Section>
          <BlockStack>
            <Card>
              <TextField label="Search Orders" value={searchTerm} onChange={handleSearch} placeholder="Search by Order ID or Product Title" clearButton onClearButtonClick={clearSearch} />
              {filteredOrders.length === 0 ? (
                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  No Products Found.
                </p>
              ) : (
                <>
                  <DataTable
                    style={{ width: "120%" }}
                    columnContentTypes={["text", "text", "text", "text"]}
                    headings={["Order ID", "Created At", "Product Type", "SwatchId", "Product Title", "RelatedProduct IDs"]}
                    rows={filteredOrders.map((order) => {
                      const variantIds = order.relatedProduct || [];
                      const showMoreButton = showMore[order.productId];

                      return [
                        order.orderId,
                        order.createdAt.toLocaleDateString(),
                        order.type,
                        order.swatchId,
                        order.productTitle,

                        <div key={order.productId}>
                          {variantIds.slice(0, showMoreButton ? variantIds.length : 3).map((id, index) => (
                            <div key={index}>{id}</div>
                          ))}
                          {variantIds.length > 3 && (
                            <Button
                              plain
                              onClick={() =>
                                setShowMore((prev) => ({
                                  ...prev,
                                  [order.productId]: !prev[order.productId],
                                }))
                              }
                            >
                              {showMoreButton ? "Show Less" : "Show More"}
                            </Button>
                          )}
                        </div>,
                      ];
                    })}
                  />

                  {totalPages > 1 && <Pagination label={`Page ${currentPage} of ${totalPages}`} hasPrevious={currentPage > 1} onPrevious={() => setCurrentPage(currentPage - 1)} hasNext={currentPage < totalPages} onNext={() => setCurrentPage(currentPage + 1)} />}
                </>
              )}
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
