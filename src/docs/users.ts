export const users = {
  "/users/register": {
    post: {
      tags: ["User"],
      summary: "Register a new user",
      security: [],
      consumes: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "userData",
          required: true,
          schema: {
            example: {
              name: "My Name",
              email: "you@example.com",
              password: "strongpassword123"
            }
          }
        }
      ],
      responses: {
        201: {
          description: "User created successfully",
          content: {
            "application/json": {
              schema: {
                example: {
                  email: "you@example.com",
                  apiKey: "0e0f2f5e-b91d-49b5-8e4f-835c9adf237c"
                }
              }
            }
          }
        },
        400: {
          description: "Invalid data or email already exists",
          content: {
            "application/json": {
              schema: {
                example: {
                  error: "Email already exists or invalid."
                }
              }
            }
          }
        }
      }
    }
  },
  "/users/login": {
    post: {
      tags: ["User"],
      summary: "User login",
      security: [],
      consumes: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "loginData",
          required: true,
          schema: {
            example: {
              email: "you@example.com",
              password: "strongpassword123"
            }
          }
        }
      ],
      responses: {
        200: {
          description: "User logged in successfully",
          content: {
            "application/json": {
              schema: {
                example: {
                  email: "emmanuel@example.com",
                  apiKey: "0e0f2f5e-b91d-49b5-8e4f-835c9adf237c"
                }
              }
            }
          }
        },
        401: {
          description: "Invalid email or password",
          content: {
            "application/json": {
              schema: {
                example: {
                  error: "Invalid email or password."
                }
              }
            }
          }
        }
      }
    }
  },
  "/users": {
    get: {
      tags: ["User"],
      summary: "Get all users",
      responses: {
        200: {
          description: "List of users",
          content: {
            "application/json": {
              schema: {
                example: [
                  { id: 1, name: "Emmanuel", email: "you@example.com", apiKey: "..." }
                ]
              }
            }
          }
        }
      }
    }
  },
  "/users/apikey/{apiKey}": {
    get: {
      tags: ["User"],
      summary: "Get user by API key",
      parameters: [
        {
          name: "apiKey",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        200: {
          description: "User found",
          content: {
            "application/json": {
              schema: {
                example: { id: 1, name: "Emmanuel", email: "you@example.com", apiKey: "..." }
              }
            }
          }
        },
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                example: { error: "User not found" }
              }
            }
          }
        }
      }
    }
  },
  "/users/{id}": {
    put: {
      tags: ["User"],
      summary: "Update user",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              example: { email: "new@example.com", password: "newpassword" }
            }
          }
        }
      },
      responses: {
        200: {
          description: "User updated",
          content: {
            "application/json": {
              schema: {
                example: { id: 1, name: "Emmanuel", email: "new@example.com", apiKey: "..." }
              }
            }
          }
        }
      }
    },
    delete: {
      tags: ["User"],
      summary: "Delete user",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" }
        }
      ],
      responses: {
        204: {
          description: "User deleted"
        },
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                example: { error: "User not found" }
              }
            }
          }
        }
      }
    }
  },
  "/users/profile/{id}": {
    get: {
      tags: ["User"],
      summary: "Get user profile",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" }
        }
      ],
      responses: {
        200: {
          description: "User profile",
          content: {
            "application/json": {
              schema: {
                example: { id: 1, name: "Emmanuel", email: "you@example.com", apiKey: "..." }
              }
            }
          }
        },
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                example: { error: "User not found" }
              }
            }
          }
        }
      }
    },
    put: {
      tags: ["User"],
      summary: "Update user profile",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              example: { name: "New Name", email: "new@example.com" }
            }
          }
        }
      },
      responses: {
        200: {
          description: "User profile updated",
          content: {
            "application/json": {
              schema: {
                example: { id: 1, name: "New Name", email: "new@example.com", apiKey: "..." }
              }
            }
          }
        }
      }
    }
  },
  "/users/change-password/{id}": {
    post: {
      tags: ["User"],
      summary: "Change user password",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              example: { oldPassword: "oldpass", newPassword: "newpass" }
            }
          }
        }
      },
      responses: {
        204: {
          description: "Password changed successfully"
        },
        400: {
          description: "Old password is incorrect",
          content: {
            "application/json": {
              schema: {
                example: { error: "Old password is incorrect" }
              }
            }
          }
        }
      }
    }
  },
  "/users/forgot-password": {
    post: {
      tags: ["User"],
      summary: "Forgot password",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              example: { email: "you@example.com" }
            }
          }
        }
      },
      responses: {
        204: {
          description: "Password reset email sent"
        },
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                example: { error: "User not found" }
              }
            }
          }
        }
      }
    }
  },
  "/users/reset-password": {
    post: {
      tags: ["User"],
      summary: "Reset password",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              example: { token: "reset-token", newPassword: "newpass" }
            }
          }
        }
      },
      responses: {
        204: {
          description: "Password reset successfully"
        },
        400: {
          description: "Invalid or expired token",
          content: {
            "application/json": {
              schema: {
                example: { error: "Invalid or expired token" }
              }
            }
          }
        }
      }
    }
  }
};
