export const productCategory = {
  "/categories": {
    get: {
      tags: ["ProductCategory"],
      summary: "Get all product categories",
      parameters: [],
      consumes: ["application/json"],
      responses: {
        200: {
          description: "List of categories",
          content: {
            "application/json": {
              schema: {
                example: [
                  { id: "1", name: "Electronics", createdAt: "2024-06-30T12:00:00Z", products: [] }
                ]
              }
            }
          }
        }
      }
    },
    post: {
      tags: ["ProductCategory"],
      summary: "Create a new product category",
      parameters: [
        {
          in: "body",
          name: "categoryData",
          required: true,
          schema: {
            example: { name: "Electronics" }
          }
        }
      ],
      consumes: ["application/json"],
      responses: {
        201: {
          description: "Category created successfully",
          content: {
            "application/json": {
              schema: {
                example: { id: "1", name: "Electronics", createdAt: "2024-06-30T12:00:00Z" }
              }
            }
          }
        },
        400: {
          description: "Invalid data or category already exists",
          content: {
            "application/json": {
              schema: {
                example: { error: "Category already exists or invalid." }
              }
            }
          }
        }
      }
    }
  },
  "/categories/{id}": {
    get: {
      tags: ["ProductCategory"],
      summary: "Get category by ID",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" }
        }
      ],
      consumes: ["application/json"],
      responses: {
        200: {
          description: "Category found",
          content: {
            "application/json": {
              schema: {
                example: { id: "1", name: "Electronics", createdAt: "2024-06-30T12:00:00Z", products: [] }
              }
            }
          }
        },
        404: {
          description: "Category not found",
          content: {
            "application/json": {
              schema: {
                example: { message: "Category not found" }
              }
            }
          }
        }
      }
    },
    put: {
      tags: ["ProductCategory"],
      summary: "Update a category",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" }
        },
        {
          in: "body",
          name: "categoryData",
          required: true,
          schema: {
            example: { name: "Updated Category" }
          }
        }
      ],
      consumes: ["application/json"],
      responses: {
        200: {
          description: "Category updated successfully",
          content: {
            "application/json": {
              schema: {
                example: { id: "1", name: "Updated Category", createdAt: "2024-06-30T12:00:00Z" }
              }
            }
          }
        },
        404: {
          description: "Category not found",
          content: {
            "application/json": {
              schema: {
                example: { message: "Category not found" }
              }
            }
          }
        }
      }
    },
    delete: {
      tags: ["ProductCategory"],
      summary: "Delete a category",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" }
        }
      ],
      consumes: ["application/json"],
      responses: {
        200: {
          description: "Category deleted successfully",
          content: {
            "application/json": {
              schema: {
                example: { id: "1", name: "Electronics", createdAt: "2024-06-30T12:00:00Z" }
              }
            }
          }
        },
        404: {
          description: "Category not found",
          content: {
            "application/json": {
              schema: {
                example: { message: "Category not found" }
              }
            }
          }
        }
      }
    }
  },
  "/categories/name/{name}": {
    get: {
      tags: ["ProductCategory"],
      summary: "Get category by name",
      parameters: [
        {
          in: "path",
          name: "name",
          required: true,
          schema: { type: "string" }
        }
      ],
      consumes: ["application/json"],
      responses: {
        200: {
          description: "Category found",
          content: {
            "application/json": {
              schema: {
                example: { id: "1", name: "Electronics", createdAt: "2024-06-30T12:00:00Z", products: [] }
              }
            }
          }
        },
        404: {
          description: "Category not found",
          content: {
            "application/json": {
              schema: {
                example: { message: "Category not found" }
              }
            }
          }
        }
      }
    }
  },
  "/categories/with-products/all": {
    get: {
      tags: ["ProductCategory"],
      summary: "Get all categories with products",
      parameters: [],
      consumes: ["application/json"],
      responses: {
        200: {
          description: "List of categories with products",
          content: {
            "application/json": {
              schema: {
                example: [
                  { id: "1", name: "Electronics", products: [{ id: "p1", name: "Phone" }] }
                ]
              }
            }
          }
        }
      }
    }
  },
  "/categories/by-product/{productId}": {
    get: {
      tags: ["ProductCategory"],
      summary: "Get category by product ID",
      parameters: [
        {
          in: "path",
          name: "productId",
          required: true,
          schema: { type: "string" }
        }
      ],
      consumes: ["application/json"],
      responses: {
        200: {
          description: "Category found",
          content: {
            "application/json": {
              schema: {
                example: { id: "1", name: "Electronics", products: [{ id: "p1", name: "Phone" }] }
              }
            }
          }
        },
        404: {
          description: "Category not found",
          content: {
            "application/json": {
              schema: {
                example: { message: "Category not found" }
              }
            }
          }
        }
      }
    }
  }
};