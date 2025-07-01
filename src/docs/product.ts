export const products = {
  "/products": {
    get: {
      tags: ["Product"],
      security: [{ ApiKeyAuth: [] }],
      // security: [{ JWT: [] }],
      summary: "Get all products",
      parameters: [],
      consumes: ["application/json"],
      description: "Returns all available products. Requires API key in Authorization header.",
      responses: {
        200: {
          description: "Product list",
          content: {
            "application/json": {
              schema: {
                example: [
                  {
                    id: "b1234567-d123-4567-8a12-123456789abc",
                    name: "Laptop",
                    categoryId: "e3bc1f95-c4ec-4bb3-9b01-216ef0df5b6a",
                    price: 1299.99,
                    createdAt: "2025-06-26T12:00:00.000Z"
                  },
                  {
                    id: "c2234567-d223-4567-8a22-123456789def",
                    name: "Desk Chair",
                    categoryId: "Furniture",
                    price: 199.99,
                    createdAt: "2025-06-25T10:00:00.000Z"
                  }
                ]
              }
            }
          }
        },
        401: {
          description: "Missing or invalid API key",
          content: {
            "application/json": {
              schema: { example: { error: "API key required" } }
            }
          }
        }
      }
    },
    post: {
      tags: ["Product"],
      security: [{ ApiKeyAuth: [] }],
      summary: "Create a new product",
      parameters: [
        {
          in: "body",
          name: "productData",
          required: true,
          schema: {
            example: {
              name: "Gaming Monitor",
              categoryId: "e3bc1f95-c4ec-4bb3-9b01-216ef0df5b6a",
              price: 299.99
            }
          }
        }
      ],
      consumes: ["application/json"],
      description: "Creates a new product. Requires API key.",
      responses: {
        201: {
          description: "Product created successfully",
          content: {
            "application/json": {
              schema: {
                example: {
                  id: "d3234567-d323-4567-8a32-123456789ghi",
                  name: "Gaming Monitor",
                  categoryId: "e3bc1f95-c4ec-4bb3-9b01-216ef0df5b6a",
                  price: 299.99,
                  createdAt: "2025-06-26T12:10:00.000Z"
                }
              }
            }
          }
        },
        400: {
          description: "Validation failed",
          content: {
            "application/json": {
              schema: { example: { error: "Name, category, and price are required." } }
            }
          }
        },
        401: {
          description: "Missing or invalid API key",
          content: {
            "application/json": {
              schema: { example: { error: "API key required" } }
            }
          }
        }
      }
    }
  },
  "/products/{id}": {
    get: {
      tags: ["Product"],
      security: [{ ApiKeyAuth: [] }],
      summary: "Get a product by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      description: "Returns a single product by ID. Requires API key.",
      responses: {
        200: {
          description: "Product found",
          content: {
            "application/json": {
              schema: {
                example: {
                  id: "b1234567-d123-4567-8a12-123456789abc",
                  name: "Laptop",
                  categoryId: "e3bc1f95-c4ec-4bb3-9b01-216ef0df5b6a",
                  price: 1299.99,
                  createdAt: "2025-06-26T12:00:00.000Z"
                }
              }
            }
          }
        },
        404: {
          description: "Product not found",
          content: {
            "application/json": {
              schema: { example: { error: "Product not found" } }
            }
          }
        },
        401: {
          description: "Missing or invalid API key",
          content: {
            "application/json": {
              schema: { example: { error: "API key required" } }
            }
          }
        }
      }
    },
    put: {
      tags: ["Product"],
      security: [{ ApiKeyAuth: [] }],
      summary: "Update a product by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        },
        {
          in: "body",
          name: "productData",
          required: true,
          schema: {
            example: {
              name: "Updated Monitor",
              categoryId: "e3bc1f95-c4ec-4bb3-9b01-216ef0df5b6a",
              price: 349.99
            }
          }
        }
      ],
      description: "Updates a product by ID. Requires API key.",
      responses: {
        200: {
          description: "Product updated successfully",
          content: {
            "application/json": {
              schema: {
                example: {
                  id: "d3234567-d323-4567-8a32-123456789ghi",
                  name: "Updated Monitor",
                  categoryId: "e3bc1f95-c4ec-4bb3-9b01-216ef0df5b6a",
                  price: 349.99,
                  createdAt: "2025-06-26T12:10:00.000Z"
                }
              }
            }
          }
        },
        400: {
          description: "Validation failed",
          content: {
            "application/json": {
              schema: { example: { error: "Name, category, and price are required." } }
            }
          }
        },
        404: {
          description: "Product not found",
          content: {
            "application/json": {
              schema: { example: { error: "Product not found" } }
            }
          }
        },
        401: {
          description: "Missing or invalid API key",
          content: {
            "application/json": {
              schema: { example: { error: "API key required" } }
            }
          }
        }
      }
    },
    delete: {
      tags: ["Product"],
      security: [{ ApiKeyAuth: [] }],
      summary: "Delete a product by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      description: "Deletes a product by ID. Requires API key.",
      responses: {
        204: {
          description: "Product deleted successfully"
        },
        404: {
          description: "Product not found",
          content: {
            "application/json": {
              schema: { example: { error: "Product not found" } }
            }
          }
        },
        401: {
          description: "Missing or invalid API key",
          content: {
            "application/json": {
              schema: { example: { error: "API key required" } }
            }
          }
        }
      }
    }
  }
};
