const fs = require('fs');
const path = require('path');

const openapi = {
    openapi: "3.0.0",
    paths: {
      "/": {
        get: {
          operationId: "AppController_getHello",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
        },
      },
      "/v1/api/question-type": {
        post: {
          operationId: "QuestionTypeController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateQuestionTypeDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Question Type"],
        },
        get: {
          operationId: "QuestionTypeController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Question Type"],
        },
        put: {
          operationId: "QuestionTypeController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateQuestionTypeDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Question Type"],
        },
        delete: {
          operationId: "QuestionTypeController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Question Type"],
        },
      },
      "/v1/api/question-rating-value": {
        post: {
          operationId: "QuestionRatingValueController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateQuestionRatingValueDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Question Rating Value"],
        },
        get: {
          operationId: "QuestionRatingValueController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Question Rating Value"],
        },
        put: {
          operationId: "QuestionRatingValueController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateQuestionRatingValueDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Question Rating Value"],
        },
        delete: {
          operationId: "QuestionRatingValueController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Question Rating Value"],
        },
      },
      "/v1/api/assessment-status": {
        post: {
          operationId: "AssessmentStatusController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentStatusDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 status"],
        },
        get: {
          operationId: "AssessmentStatusController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 status"],
        },
        put: {
          operationId: "AssessmentStatusController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentStatusDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 status"],
        },
        delete: {
          operationId: "AssessmentStatusController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 status"],
        },
      },
      "/v1/api/response-status": {
        post: {
          operationId: "ResponseStatusController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateResponseStatusDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Response Status"],
        },
        get: {
          operationId: "ResponseStatusController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Response Status"],
        },
        put: {
          operationId: "ResponseStatusController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateResponseStatusDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Response Status"],
        },
        delete: {
          operationId: "ResponseStatusController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Response Status"],
        },
      },
      "/v1/api/assessment-template": {
        post: {
          operationId: "AssessmentTemplateController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentTemplateDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
        get: {
          operationId: "AssessmentTemplateController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
        put: {
          operationId: "AssessmentTemplateController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentTemplateDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
        delete: {
          operationId: "AssessmentTemplateController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
      },
      "/v1/api/assessment-template/create-full-template-with-section-and-question":
      {
        post: {
          operationId:
            "AssessmentTemplateController_createFullTemplateWithSectionAndQuestion",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateFullTemplateWithSectionAndQuestionDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
      },
      "/v1/api/assessment-template/get-by-template-id": {
        post: {
          operationId: "AssessmentTemplateController_getTemplateById",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
      },
      "/v1/api/assessment-template/count": {
        post: {
          operationId: "AssessmentTemplateController_findAverage",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AssessmentTemplateDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
      },
      "/v1/api/assessment-template/force": {
        delete: {
          operationId: "AssessmentTemplateController_forceDelete",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ForceDeleteDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
      },
      "/v1/api/assessment-template/create-deep-copy": {
        post: {
          operationId: "AssessmentTemplateController_createDeepCopy",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
      },
      "/v1/api/assessment-template/create-deep-copy/assessment-template-config": {
        post: {
          operationId:
            "AssessmentTemplateController_createDeepCopyFromAssessmentTemplateConfig",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 template"],
        },
      },
      "/v1/api/assessment-section": {
        post: {
          operationId: "AssessmentSectionController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentSectionDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 section"],
        },
        put: {
          operationId: "AssessmentSectionController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentSectionDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 section"],
        },
        delete: {
          operationId: "AssessmentSectionController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 section"],
        },
      },
      "/v1/api/assessment-section/get-by-template-id": {
        post: {
          operationId: "AssessmentSectionController_findAll",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTemplateIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 section"],
        },
      },
      "/v1/api/assessment-dimension": {
        post: {
          operationId: "AssessmentDimensionController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentDimensionDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 dimension"],
        },
        put: {
          operationId: "AssessmentDimensionController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentDimensionDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 dimension"],
        },
        delete: {
          operationId: "AssessmentDimensionController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 dimension"],
        },
      },
      "/v1/api/assessment-dimension/get-by-template-id": {
        post: {
          operationId: "AssessmentDimensionController_findAll",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTemplateIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 dimension"],
        },
      },
      "/v1/api/assessment-dimension/get-by-section-id": {
        post: {
          operationId: "AssessmentDimensionController_findAllBySectionId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 dimension"],
        },
      },
      "/v1/api/assessment-question": {
        post: {
          operationId: "AssessmentQuestionController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentQuestionDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 question"],
        },
        get: {
          operationId: "AssessmentQuestionController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 question"],
        },
        put: {
          operationId: "AssessmentQuestionController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentQuestionDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 question"],
        },
        delete: {
          operationId: "AssessmentQuestionController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 question"],
        },
      },
      "/v1/api/assessment-question/get-by-template-id": {
        post: {
          operationId: "AssessmentQuestionController_fetchQuestionByTempId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTemplateIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 question"],
        },
      },
      "/v1/api/assessment-question/get-by-section-id": {
        post: {
          operationId:
            "AssessmentQuestionController_fetchQuestionBySectionIdByAssessmentSectionId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentSectionIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 question"],
        },
      },
      "/v1/api/assessment-question/get-by-dimension-id": {
        post: {
          operationId: "AssessmentQuestionController_fetchQuestionByDimensionId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentDimensionIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 question"],
        },
      },
      "/v1/api/assessment-user/is-assessment-user-logged-in": {
        get: {
          operationId: "AssessmentUserController_isAdminLoggedIn",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/test": {
        get: {
          operationId: "AssessmentUserController_test",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/add-assessment-user-to-project": {
        post: {
          operationId: "AssessmentUserController_addAssessmentUserToProject",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AddAssessmentUserToProjectDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/remove-assessment-user-from-project": {
        delete: {
          operationId: "AssessmentUserController_removeAssessmentUserFromProject",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/get-by-tracking-id-and-customer-id-not-mapped": {
        post: {
          operationId:
            "AssessmentUserController_getAssessmentUserByTrackingIdNotMapped",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByTrackingIdNotMappedDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/assmessment-user-from-project": {
        get: {
          operationId: "AssessmentUserController_getAssessmentUserFromProject",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/initialize-account": {
        post: {
          operationId: "AssessmentUserController_initializeAccount",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/InitializeAccountDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/verify-otp": {
        post: {
          operationId: "AssessmentUserController_verifyOtp",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/VerifyOtpDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/confirm-login": {
        post: {
          operationId: "AssessmentUserController_confirmLogin",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ConfirmLoginDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/logout": {
        post: {
          operationId: "AssessmentUserController_logout",
          parameters: [],
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/update-profile": {
        put: {
          operationId: "AssessmentUserController_updateProfile",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateProfileDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/profile-pic": {
        post: {
          operationId: "AssessmentUserController_uploadProfilePic",
          parameters: [],
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
        get: {
          operationId: "AssessmentUserController_getProfilePic",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/forgot-password/initiate": {
        post: {
          operationId: "AssessmentUserController_forgotPassword",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ForgotPasswordDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/forgot-password/send-otp": {
        post: {
          operationId: "AssessmentUserController_forgotPasswordOTP",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ForgotPasswordTokenDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-user/forgot-password/final": {
        post: {
          operationId: "AssessmentUserController_forgotPasswordFinal",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ForgotPasswordResetFinalDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment User"],
        },
      },
      "/v1/api/assessment-tracking": {
        post: {
          operationId: "AssessmentTrackingController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentTrackingDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
        get: {
          operationId: "AssessmentTrackingController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
        put: {
          operationId: "AssessmentTrackingController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentTrackingDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
        delete: {
          operationId: "AssessmentTrackingController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/publish-assessment": {
        post: {
          operationId: "AssessmentTrackingController_publicAssessment",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/send-reminder-email": {
        post: {
          operationId: "AssessmentTrackingController_sendReminderEmail",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SendReminderEmailDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/average": {
        post: {
          operationId: "AssessmentTrackingController_findAverage",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AssessmentTrackingDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/stakeholder": {
        get: {
          operationId:
            "AssessmentTrackingController_findStakeholderForParticularClient",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/self": {
        get: {
          operationId: "AssessmentTrackingController_findForParticularClient",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-report": {
        post: {
          operationId: "AssessmentTrackingController_getReport",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-report-optional-comments": {
        post: {
          operationId: "AssessmentTrackingController_getReportOptionalComments",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-report-short-response": {
        post: {
          operationId:
            "AssessmentTrackingController_getReportShortResponseComments",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-report-long-response": {
        post: {
          operationId: "AssessmentTrackingController_getReportShortLongResponse",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-report-all-response": {
        post: {
          operationId: "AssessmentTrackingController_getReportALLResponse",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-template-by-tracking-id-two-self": {
        post: {
          operationId:
            "AssessmentTrackingController_getTemplateByTrackingIdForSelf",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTrackingId",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-template-by-tracking-id-two": {
        post: {
          operationId: "AssessmentTrackingController_getTemplateByTrackingIdTwo",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTrackingId",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-template-by-tracking-id": {
        post: {
          operationId: "AssessmentTrackingController_getTemplateByTrackingId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTrackingId",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-by-template-id": {
        post: {
          operationId: "AssessmentTrackingController_getTrackingByTemplateId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTemplateIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/get-all-accessors-by-id": {
        post: {
          operationId: "AssessmentTrackingController_getAccessors",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessment-tracking/complete-assessment": {
        post: {
          operationId: "AssessmentTrackingController_completeAssessmentTracking",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment360 Tracking"],
        },
      },
      "/v1/api/assessor-mapping": {
        post: {
          operationId: "AssessorMappingController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessorMappingDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessor mapping"],
        },
        get: {
          operationId: "AssessorMappingController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessor mapping"],
        },
        put: {
          operationId: "AssessorMappingController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessorMappingDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessor mapping"],
        },
        delete: {
          operationId: "AssessorMappingController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessor mapping"],
        },
      },
      "/v1/api/assessor-mapping/get-by-tracking-id": {
        post: {
          operationId:
            "AssessorMappingController_getAssessorMapppingByAssessorId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTrackingId",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessor mapping"],
        },
      },
      "/v1/api/response-tracking/create-or-update": {
        post: {
          operationId: "ResponseTrackingController_createOrUpdate",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateOrUpdateResponseTrackingDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Response Tracking"],
        },
      },
      "/v1/api/response-tracking/report": {
        post: {
          operationId: "ResponseTrackingController_findReport",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AssessmentTrackingDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Response Tracking"],
        },
      },
      "/v1/api/excel-parser/batch-upload-assessment-user": {
        post: {
          operationId: "ExcelParserController_batchUploadAssessmentUser",
          parameters: [],
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/batch-upload-assessor": {
        post: {
          operationId: "ExcelParserController_batchUploadAssessor",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTrackingId",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/full-report": {
        get: {
          operationId: "ExcelParserController_processFullReportJsonToExcel",
          parameters: [
            {
              name: "assessmentTrackingId",
              required: true,
              in: "query",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/report": {
        get: {
          operationId: "ExcelParserController_processReportJsonToExcel",
          parameters: [
            {
              name: "assessmentTrackingId",
              required: true,
              in: "query",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/template/batch-upload-assessor": {
        get: {
          operationId: "ExcelParserController_batchUploadAssessorTemplate",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/template/batch-upload-assessment-user-fix": {
        get: {
          operationId: "ExcelParserController_batchUploadAssessmentUserTemplate",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/template/batch-upload-assessment-user": {
        get: {
          operationId:
            "ExcelParserController_batchUploadAssessmentUserTemplateFix",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/batch-upload-assessment": {
        post: {
          operationId: "ExcelParserController_batchUploadAssessment",
          parameters: [],
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/batch-upload-question-template-config": {
        post: {
          operationId: "ExcelParserController_batchUploadQuestionTemplateConfig",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AssessmentTemplate",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/batch-upload-question-template-prepare": {
        post: {
          operationId: "ExcelParserController_batchUploadQuestionTemplatePrepare",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AssessmentTemplate",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/excel-parser/template/batch-upload-assessment": {
        get: {
          operationId: "ExcelParserController_batchUploadAssessmentTemplate",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Excel parser"],
        },
      },
      "/v1/api/relationship-type": {
        post: {
          operationId: "RelationshipTypeController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateRelationshipTypeDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Relationship Type"],
        },
        get: {
          operationId: "RelationshipTypeController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Relationship Type"],
        },
        put: {
          operationId: "RelationshipTypeController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateRelationshipTypeDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Relationship Type"],
        },
        delete: {
          operationId: "RelationshipTypeController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Relationship Type"],
        },
      },
      "/v1/api/mail-config": {
        post: {
          operationId: "MailConfigController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateMailConfigDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
        },
        get: {
          operationId: "MailConfigController_get",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
        },
        put: {
          operationId: "MailConfigController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateMailConfigDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
        },
        delete: {
          operationId: "MailConfigController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
        },
      },
      "/v1/api/assessment-tracking-reminder": {
        post: {
          operationId:
            "AssessmentTrackingReminderController_getAssessmentTrackingReminder",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetRemindedEventsDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
        },
      },
      "/v1/api/assessment-type": {
        post: {
          operationId: "AssessmentTypeController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentTypeDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Type"],
        },
        get: {
          operationId: "AssessmentTypeController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Type"],
        },
        put: {
          operationId: "AssessmentTypeController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentTypeDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Type"],
        },
        delete: {
          operationId: "AssessmentTypeController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Type"],
        },
      },
      "/v1/api/template-status": {
        post: {
          operationId: "TemplateStatusController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateTemplateStatusDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["template-status"],
        },
        get: {
          operationId: "TemplateStatusController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["template-status"],
        },
        put: {
          operationId: "TemplateStatusController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateTemplateStatusDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["template-status"],
        },
        delete: {
          operationId: "TemplateStatusController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["template-status"],
        },
      },
      "/v1/api/assessment-template-config": {
        post: {
          operationId: "AssessmentTemplateConfigController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentTemplateConfigDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
        get: {
          operationId: "AssessmentTemplateConfigController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
        put: {
          operationId: "AssessmentTemplateConfigController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentTemplateConfigDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
        delete: {
          operationId: "AssessmentTemplateConfigController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
      },
      "/v1/api/assessment-template-config/get-by-template-id": {
        post: {
          operationId: "AssessmentTemplateConfigController_getTemplateById",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
      },
      "/v1/api/assessment-template-config/count": {
        post: {
          operationId: "AssessmentTemplateConfigController_findAverage",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AssessmentTemplateConfigDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
      },
      "/v1/api/assessment-template-config/force": {
        delete: {
          operationId: "AssessmentTemplateConfigController_forceDelete",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ForceDeleteDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
      },
      "/v1/api/assessment-template-config/create-deep-copy": {
        post: {
          operationId: "AssessmentTemplateConfigController_createDeepCopy",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Template Config"],
        },
      },
      "/v1/api/assessment-section-config": {
        post: {
          operationId: "AssessmentSectionConfigController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentSectionConfigDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Section Config"],
        },
        put: {
          operationId: "AssessmentSectionConfigController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentSectionConfigDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Section Config"],
        },
        delete: {
          operationId: "AssessmentSectionConfigController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Section Config"],
        },
      },
      "/v1/api/assessment-section-config/get-by-template-id": {
        post: {
          operationId: "AssessmentSectionConfigController_findAll",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTemplateConfigIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Section Config"],
        },
      },
      "/v1/api/assessment-dimension-config": {
        post: {
          operationId: "AssessmentDimensionConfigController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentDimensionConfigDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["assessment-dimension-config"],
        },
        put: {
          operationId: "AssessmentDimensionConfigController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentDimensionConfigDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["assessment-dimension-config"],
        },
        delete: {
          operationId: "AssessmentDimensionConfigController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["assessment-dimension-config"],
        },
      },
      "/v1/api/assessment-dimension-config/get-by-template-id": {
        post: {
          operationId: "AssessmentDimensionConfigController_findAll",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTemplateConfigIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["assessment-dimension-config"],
        },
      },
      "/v1/api/assessment-dimension-config/get-by-section-id": {
        post: {
          operationId: "AssessmentDimensionConfigController_findAllBySectionId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["assessment-dimension-config"],
        },
      },
      "/v1/api/assessment-question-config": {
        post: {
          operationId: "AssessmentQuestionConfigController_create",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateAssessmentQuestionConfigDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Question Config"],
        },
        get: {
          operationId: "AssessmentQuestionConfigController_findAll",
          parameters: [],
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Question Config"],
        },
        put: {
          operationId: "AssessmentQuestionConfigController_update",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateAssessmentQuestionConfigDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Question Config"],
        },
        delete: {
          operationId: "AssessmentQuestionConfigController_remove",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CoreDto",
                },
              },
            },
          },
          responses: {
            200: {
              description: "",
            },
          },
          tags: ["Assessment Question Config"],
        },
      },
      "/v1/api/assessment-question-config/get-by-template-config-id": {
        post: {
          operationId: "AssessmentQuestionConfigController_fetchQuestion",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentTemplateConfigIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Question Config"],
        },
      },
      "/v1/api/assessment-question-config/get-by-section-config-id": {
        post: {
          operationId:
            "AssessmentQuestionConfigController_fetchQuestionBySectionIdByAssessmentSectionId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentSectionConfigIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Question Config"],
        },
      },
      "/v1/api/assessment-question-config/get-by-dimension-config-id": {
        post: {
          operationId:
            "AssessmentQuestionConfigController_fetchQuestionByDimensionId",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetByAssessmentDimensionConfigIdDto",
                },
              },
            },
          },
          responses: {
            201: {
              description: "",
            },
          },
          tags: ["Assessment Question Config"],
        },
      },
    },
    info: {
      title: "PIEDAP - Assessment API",
      description: "Api for Piedap Assessment",
      version: "1.0",
      contact: {},
    },
    tags: [],
    servers: [
      {
        url: "https://dev.piedap.com/piedapassessment",
      },
    ],
    components: {
      schemas: {
        CreateQuestionTypeDto: {
          type: "object",
          properties: {
            questionTypeName: {
              type: "string",
            },
            responseType: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["questionTypeName", "responseType", "comments"],
        },
        UpdateQuestionTypeDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            questionTypeName: {
              type: "string",
            },
            responseType: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["id", "questionTypeName", "responseType", "comments"],
        },
        CoreDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
          },
          required: ["id"],
        },
        CreateQuestionRatingValueDto: {
          type: "object",
          properties: {
            ratingName: {
              type: "string",
            },
            ratingValue: {
              type: "number",
            },
            comments: {
              type: "string",
            },
          },
          required: ["ratingName", "ratingValue", "comments"],
        },
        UpdateQuestionRatingValueDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            ratingName: {
              type: "string",
            },
            ratingValue: {
              type: "number",
            },
            comments: {
              type: "string",
            },
          },
          required: ["id", "ratingName", "ratingValue", "comments"],
        },
        CreateAssessmentStatusDto: {
          type: "object",
          properties: {
            assessmentStatus: {
              type: "string",
            },
            colorCode: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["assessmentStatus", "colorCode", "comments"],
        },
        UpdateAssessmentStatusDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            assessmentStatus: {
              type: "string",
            },
            colorCode: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["id", "assessmentStatus", "colorCode", "comments"],
        },
        CreateResponseStatusDto: {
          type: "object",
          properties: {
            responseStatus: {
              type: "string",
            },
            colorCode: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["responseStatus", "colorCode", "comments"],
        },
        UpdateResponseStatusDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            responseStatus: {
              type: "string",
            },
            colorCode: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["id", "responseStatus", "colorCode", "comments"],
        },
        CreateAssessmentTemplateDto: {
          type: "object",
          properties: {
            assessmentTemplateName: {
              type: "string",
            },
            detailedDescription: {
              type: "string",
            },
            status: {
              type: "string",
            },
            assessmentType: {
              type: "string",
              description: "The type of verification to be performed.",
              enum: ["TALENT", "MATURITY", "DISCOVERY", "SURVEY"],
            },
            assessmentTemplateDisplayName: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "assessmentTemplateName",
            "detailedDescription",
            "status",
            "assessmentType",
            "assessmentTemplateDisplayName",
            "comments",
          ],
        },
        CreateFullTemplateWithSectionAndQuestionDto: {
          type: "object",
          properties: {
            assessmentQuestions: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          required: ["assessmentQuestions"],
        },
        AssessmentTemplateDto: {
          type: "object",
          properties: {
            assessmentTemplateId: {
              type: "object",
            },
          },
          required: ["assessmentTemplateId"],
        },
        UpdateAssessmentTemplateDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            assessmentTemplateName: {
              type: "string",
            },
            detailedDescription: {
              type: "string",
            },
            assessmentType: {
              type: "string",
              description: "The type of verification to be performed.",
              enum: ["TALENT", "MATURITY", "DISCOVERY", "SURVEY"],
            },
            status: {
              type: "string",
            },
            assessmentTemplateDisplayName: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "id",
            "assessmentTemplateName",
            "detailedDescription",
            "assessmentType",
            "status",
            "assessmentTemplateDisplayName",
            "comments",
          ],
        },
        ForceDeleteDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
          required: ["id", "password"],
        },
        AssessmentTemplate: {
          type: "object",
          properties: {},
        },
        CreateAssessmentSectionDto: {
          type: "object",
          properties: {
            sectionName: {
              type: "string",
            },
            sectionNo: {
              type: "number",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateId: {
              $ref: "#/components/schemas/AssessmentTemplate",
            },
          },
          required: [
            "sectionName",
            "sectionNo",
            "comments",
            "assessmentTemplateId",
          ],
        },
        GetByAssessmentTemplateIdDto: {
          type: "object",
          properties: {
            assessmentTemplateId: {
              type: "string",
            },
          },
          required: ["assessmentTemplateId"],
        },
        UpdateAssessmentSectionDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            sectionName: {
              type: "string",
            },
            sectionNo: {
              type: "number",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateId: {
              $ref: "#/components/schemas/AssessmentTemplate",
            },
          },
          required: [
            "id",
            "sectionName",
            "sectionNo",
            "comments",
            "assessmentTemplateId",
          ],
        },
        AssessmentSection: {
          type: "object",
          properties: {},
        },
        CreateAssessmentDimensionDto: {
          type: "object",
          properties: {
            dimensionName: {
              type: "string",
            },
            dimensionNo: {
              type: "number",
            },
            assessmentSectionId: {
              $ref: "#/components/schemas/AssessmentSection",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "dimensionName",
            "dimensionNo",
            "assessmentSectionId",
            "comments",
          ],
        },
        UpdateAssessmentDimensionDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            dimensionName: {
              type: "string",
            },
            dimensionNo: {
              type: "string",
            },
            assessmentSectionId: {
              $ref: "#/components/schemas/AssessmentSection",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "id",
            "dimensionName",
            "dimensionNo",
            "assessmentSectionId",
            "comments",
          ],
        },
        AssessmentDimension: {
          type: "object",
          properties: {},
        },
        CreateAssessmentQuestionDto: {
          type: "object",
          properties: {
            questionNo: {
              type: "number",
            },
            questionName: {
              type: "string",
            },
            questionType: {
              type: "string",
            },
            isRequiredForClientOrNot: {
              type: "boolean",
            },
            clientQuestion: {
              type: "string",
            },
            standardValue: {
              type: "number",
            },
            targetValue: {
              type: "number",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateId: {
              $ref: "#/components/schemas/AssessmentTemplate",
            },
            assessmentSectionId: {
              $ref: "#/components/schemas/AssessmentSection",
            },
            assessmentDimensionId: {
              $ref: "#/components/schemas/AssessmentDimension",
            },
          },
          required: [
            "questionNo",
            "questionName",
            "questionType",
            "isRequiredForClientOrNot",
            "clientQuestion",
            "standardValue",
            "targetValue",
            "comments",
            "assessmentTemplateId",
            "assessmentSectionId",
            "assessmentDimensionId",
          ],
        },
        GetByAssessmentSectionIdDto: {
          type: "object",
          properties: {
            assessmentSectionId: {
              type: "string",
            },
          },
          required: ["assessmentSectionId"],
        },
        GetByAssessmentDimensionIdDto: {
          type: "object",
          properties: {
            assessmentDimensionId: {
              type: "string",
            },
          },
          required: ["assessmentDimensionId"],
        },
        UpdateAssessmentQuestionDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            questionNo: {
              type: "number",
            },
            questionName: {
              type: "string",
            },
            questionType: {
              type: "string",
            },
            isRequiredForClientOrNot: {
              type: "boolean",
            },
            clientQuestion: {
              type: "string",
            },
            comments: {
              type: "string",
            },
            standardValue: {
              type: "number",
            },
            targetValue: {
              type: "number",
            },
            assessmentTemplateId: {
              $ref: "#/components/schemas/AssessmentTemplate",
            },
            assessmentSectionId: {
              $ref: "#/components/schemas/AssessmentSection",
            },
            assessmentDimensionId: {
              $ref: "#/components/schemas/AssessmentDimension",
            },
          },
          required: [
            "id",
            "questionNo",
            "questionName",
            "questionType",
            "isRequiredForClientOrNot",
            "clientQuestion",
            "comments",
            "standardValue",
            "targetValue",
            "assessmentTemplateId",
            "assessmentSectionId",
            "assessmentDimensionId",
          ],
        },
        AddAssessmentUserToProjectDto: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
          },
          required: ["email"],
        },
        GetByTrackingIdNotMappedDto: {
          type: "object",
          properties: {
            assessmentTrackingId: {
              type: "string",
            },
          },
          required: ["assessmentTrackingId"],
        },
        InitializeAccountDto: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
          },
          required: ["email"],
        },
        VerifyOtpDto: {
          type: "object",
          properties: {
            otp: {
              type: "string",
            },
          },
          required: ["otp"],
        },
        ConfirmLoginDto: {
          type: "object",
          properties: {
            password: {
              type: "string",
            },
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
          },
          required: ["password", "firstName", "lastName"],
        },
        UpdateProfileDto: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
            },
            lastName: {
              type: "string",
            },
            dialingCode: {
              type: "string",
            },
            contactNumber: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["dialingCode", "contactNumber"],
        },
        ForgotPasswordDto: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
          },
          required: ["email"],
        },
        ForgotPasswordTokenDto: {
          type: "object",
          properties: {
            token: {
              type: "string",
            },
            confirmToken: {
              type: "string",
            },
          },
          required: ["token", "confirmToken"],
        },
        ForgotPasswordResetFinalDto: {
          type: "object",
          properties: {
            token: {
              type: "string",
            },
            confirmToken: {
              type: "string",
            },
            code: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
          required: ["token", "confirmToken", "code", "password"],
        },
        AssessmentUser: {
          type: "object",
          properties: {},
        },
        CreateAssessmentTrackingDto: {
          type: "object",
          properties: {
            cutOffDate: {
              type: "string",
            },
            assessmentName: {
              type: "string",
            },
            reminderFrequency: {
              type: "string",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateId: {
              $ref: "#/components/schemas/AssessmentTemplate",
            },
            assessmentUserId: {
              $ref: "#/components/schemas/AssessmentUser",
            },
          },
          required: [
            "cutOffDate",
            "assessmentName",
            "reminderFrequency",
            "comments",
            "assessmentTemplateId",
            "assessmentUserId",
          ],
        },
        AssessmentTracking: {
          type: "object",
          properties: {},
        },
        SendReminderEmailDto: {
          type: "object",
          properties: {
            assessmentTrackingId: {
              $ref: "#/components/schemas/AssessmentTracking",
            },
            assessmentUserId: {
              $ref: "#/components/schemas/AssessmentUser",
            },
          },
          required: ["assessmentTrackingId", "assessmentUserId"],
        },
        AssessmentTrackingDto: {
          type: "object",
          properties: {
            assessmentTrackingId: {
              $ref: "#/components/schemas/AssessmentTrackingDto",
            },
          },
          required: ["assessmentTrackingId"],
        },
        GetByAssessmentTrackingId: {
          type: "object",
          properties: {
            assessmentTrackingId: {
              type: "string",
            },
          },
          required: ["assessmentTrackingId"],
        },
        UpdateAssessmentTrackingDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            cutOffDate: {
              type: "string",
            },
            assessmentName: {
              type: "string",
            },
            reminderFrequency: {
              type: "string",
            },
            assessmentStatus: {
              type: "string",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateId: {
              $ref: "#/components/schemas/AssessmentTemplate",
            },
            assessmentUserId: {
              $ref: "#/components/schemas/AssessmentUser",
            },
          },
          required: [
            "id",
            "cutOffDate",
            "assessmentName",
            "reminderFrequency",
            "assessmentStatus",
            "comments",
            "assessmentTemplateId",
            "assessmentUserId",
          ],
        },
        CreateAssessorMappingDto: {
          type: "object",
          properties: {
            relationshipType: {
              type: "string",
            },
            comments: {
              type: "string",
            },
            assessmentUserId: {
              $ref: "#/components/schemas/AssessmentUser",
            },
            assessmentTrackingId: {
              $ref: "#/components/schemas/AssessmentTracking",
            },
          },
          required: [
            "relationshipType",
            "comments",
            "assessmentUserId",
            "assessmentTrackingId",
          ],
        },
        UpdateAssessorMappingDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            relationshipType: {
              type: "string",
            },
            comments: {
              type: "string",
            },
            assessmentUserId: {
              $ref: "#/components/schemas/AssessmentUser",
            },
            assessmentTrackingId: {
              $ref: "#/components/schemas/AssessmentTracking",
            },
          },
          required: [
            "id",
            "relationshipType",
            "comments",
            "assessmentUserId",
            "assessmentTrackingId",
          ],
        },
        AssessmentQuestion: {
          type: "object",
          properties: {},
        },
        CreateOrUpdateResponseTrackingDto: {
          type: "object",
          properties: {
            ratingResponse: {
              type: "number",
            },
            longResponse: {
              type: "string",
            },
            shortResponse: {
              type: "string",
            },
            isTrueOrFalse: {
              type: "boolean",
            },
            trueOrFalseComment: {
              type: "string",
            },
            optionalComment: {
              type: "string",
            },
            assessmentTrackingId: {
              $ref: "#/components/schemas/AssessmentTracking",
            },
            assessmentQuestionId: {
              $ref: "#/components/schemas/AssessmentQuestion",
            },
          },
          required: [
            "ratingResponse",
            "longResponse",
            "shortResponse",
            "isTrueOrFalse",
            "trueOrFalseComment",
            "optionalComment",
            "assessmentTrackingId",
            "assessmentQuestionId",
          ],
        },
        CreateRelationshipTypeDto: {
          type: "object",
          properties: {
            relationshipTypeName: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["relationshipTypeName", "comments"],
        },
        UpdateRelationshipTypeDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            relationshipTypeName: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["id", "relationshipTypeName", "comments"],
        },
        CreateMailConfigDto: {
          type: "object",
          properties: {
            host: {
              type: "string",
            },
            port: {
              type: "string",
            },
            username: {
              type: "string",
            },
            password: {
              type: "string",
            },
            from: {
              type: "string",
            },
            fromName: {
              type: "string",
            },
          },
          required: ["host", "port", "username", "password", "from", "fromName"],
        },
        UpdateMailConfigDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            host: {
              type: "string",
            },
            port: {
              type: "string",
            },
            username: {
              type: "string",
            },
            password: {
              type: "string",
            },
            from: {
              type: "string",
            },
            fromName: {
              type: "string",
            },
            active: {
              type: "boolean",
            },
          },
          required: [
            "id",
            "host",
            "port",
            "username",
            "password",
            "from",
            "fromName",
            "active",
          ],
        },
        GetRemindedEventsDto: {
          type: "object",
          properties: {
            assessmentUserId: {
              type: "string",
            },
            assessmentCustomerTrackingId: {
              type: "string",
            },
          },
          required: ["assessmentUserId", "assessmentCustomerTrackingId"],
        },
        CreateAssessmentTypeDto: {
          type: "object",
          properties: {
            assessmentType: {
              type: "string",
            },
            description: {
              type: "string",
            },
          },
          required: ["assessmentType", "description"],
        },
        UpdateAssessmentTypeDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            assessmentType: {
              type: "string",
            },
            description: {
              type: "string",
            },
          },
          required: ["id", "assessmentType", "description"],
        },
        CreateTemplateStatusDto: {
          type: "object",
          properties: {
            templateStatus: {
              type: "string",
            },
            colorCode: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["templateStatus", "colorCode", "comments"],
        },
        UpdateTemplateStatusDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            templateStatus: {
              type: "string",
            },
            colorCode: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: ["id", "templateStatus", "colorCode", "comments"],
        },
        CreateAssessmentTemplateConfigDto: {
          type: "object",
          properties: {
            assessmentTemplateName: {
              type: "string",
            },
            detailedDescription: {
              type: "string",
            },
            status: {
              type: "string",
            },
            assessmentType: {
              type: "string",
            },
            assessmentTemplateDisplayName: {
              type: "string",
            },
            templateTypeName: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "assessmentTemplateName",
            "detailedDescription",
            "status",
            "assessmentType",
            "assessmentTemplateDisplayName",
            "templateTypeName",
            "comments",
          ],
        },
        AssessmentTemplateConfigDto: {
          type: "object",
          properties: {
            assessmentTemplateConfigId: {
              type: "string",
            },
          },
          required: ["assessmentTemplateConfigId"],
        },
        UpdateAssessmentTemplateConfigDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            assessmentTemplateName: {
              type: "string",
            },
            detailedDescription: {
              type: "string",
            },
            templateTypeName: {
              type: "string",
            },
            assessmentType: {
              type: "string",
            },
            status: {
              type: "string",
            },
            assessmentTemplateDisplayName: {
              type: "string",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "id",
            "assessmentTemplateName",
            "detailedDescription",
            "templateTypeName",
            "assessmentType",
            "status",
            "assessmentTemplateDisplayName",
            "comments",
          ],
        },
        AssessmentTemplateConfig: {
          type: "object",
          properties: {},
        },
        CreateAssessmentSectionConfigDto: {
          type: "object",
          properties: {
            sectionName: {
              type: "string",
            },
            sectionNo: {
              type: "number",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateConfigId: {
              $ref: "#/components/schemas/AssessmentTemplateConfig",
            },
          },
          required: [
            "sectionName",
            "sectionNo",
            "comments",
            "assessmentTemplateConfigId",
          ],
        },
        GetByAssessmentTemplateConfigIdDto: {
          type: "object",
          properties: {
            assessmentTemplateConfigId: {
              type: "string",
            },
          },
          required: ["assessmentTemplateConfigId"],
        },
        UpdateAssessmentSectionConfigDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            sectionName: {
              type: "string",
            },
            sectionNo: {
              type: "number",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateConfigId: {
              $ref: "#/components/schemas/AssessmentTemplateConfig",
            },
          },
          required: [
            "id",
            "sectionName",
            "sectionNo",
            "comments",
            "assessmentTemplateConfigId",
          ],
        },
        AssessmentSectionConfig: {
          type: "object",
          properties: {},
        },
        CreateAssessmentDimensionConfigDto: {
          type: "object",
          properties: {
            dimensionName: {
              type: "string",
            },
            dimensionNo: {
              type: "number",
            },
            assessmentSectionConfigId: {
              $ref: "#/components/schemas/AssessmentSectionConfig",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "dimensionName",
            "dimensionNo",
            "assessmentSectionConfigId",
            "comments",
          ],
        },
        UpdateAssessmentDimensionConfigDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            dimensionName: {
              type: "string",
            },
            dimensionNo: {
              type: "string",
            },
            assessmentSectionConfigId: {
              $ref: "#/components/schemas/AssessmentSectionConfig",
            },
            comments: {
              type: "string",
            },
          },
          required: [
            "id",
            "dimensionName",
            "dimensionNo",
            "assessmentSectionConfigId",
            "comments",
          ],
        },
        AssessmentDimensionConfig: {
          type: "object",
          properties: {},
        },
        CreateAssessmentQuestionConfigDto: {
          type: "object",
          properties: {
            questionNo: {
              type: "number",
            },
            questionName: {
              type: "string",
            },
            questionType: {
              type: "string",
            },
            standardValue: {
              type: "number",
            },
            targetValue: {
              type: "number",
            },
            isRequiredForClientOrNot: {
              type: "boolean",
            },
            clientQuestion: {
              type: "string",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateConfigId: {
              $ref: "#/components/schemas/AssessmentTemplateConfig",
            },
            assessmentSectionConfigId: {
              $ref: "#/components/schemas/AssessmentSectionConfig",
            },
            assessmentDimensionConfigId: {
              $ref: "#/components/schemas/AssessmentDimensionConfig",
            },
          },
          required: [
            "questionNo",
            "questionName",
            "questionType",
            "standardValue",
            "targetValue",
            "isRequiredForClientOrNot",
            "clientQuestion",
            "comments",
            "assessmentTemplateConfigId",
            "assessmentSectionConfigId",
            "assessmentDimensionConfigId",
          ],
        },
        GetByAssessmentSectionConfigIdDto: {
          type: "object",
          properties: {
            assessmentSectionConfigId: {
              type: "string",
            },
          },
          required: ["assessmentSectionConfigId"],
        },
        GetByAssessmentDimensionConfigIdDto: {
          type: "object",
          properties: {
            assessmentDimensionConfigId: {
              type: "string",
            },
          },
          required: ["assessmentDimensionConfigId"],
        },
        UpdateAssessmentQuestionConfigDto: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            questionNo: {
              type: "number",
            },
            questionName: {
              type: "string",
            },
            questionType: {
              type: "string",
            },
            isRequiredForClientOrNot: {
              type: "boolean",
            },
            standardValue: {
              type: "number",
            },
            targetValue: {
              type: "number",
            },
            clientQuestion: {
              type: "string",
            },
            comments: {
              type: "string",
            },
            assessmentTemplateConfigId: {
              $ref: "#/components/schemas/AssessmentTemplateConfig",
            },
            assessmentSectionConfigId: {
              $ref: "#/components/schemas/AssessmentSectionConfig",
            },
            assessmentDimensionConfigId: {
              $ref: "#/components/schemas/AssessmentDimensionConfig",
            },
          },
          required: [
            "id",
            "questionNo",
            "questionName",
            "questionType",
            "isRequiredForClientOrNot",
            "standardValue",
            "targetValue",
            "clientQuestion",
            "comments",
            "assessmentTemplateConfigId",
            "assessmentSectionConfigId",
            "assessmentDimensionConfigId",
          ],
        },
      },
    },
  };
  

  
function createFolderStructure(openapi) {
    const paths = openapi.paths;
    Object.keys(paths).forEach((pathKey) => {
      console.log('pathKey:',pathKey);
      const pathValue = paths[pathKey];
      const folderName = pathKey.replace('/', '_');
      fs.mkdirSync(folderName, { recursive: true });
  
      Object.keys(pathValue).forEach((method) => {
        const fileName = `${method.toUpperCase()}.js`;
        fs.writeFileSync(path.join(folderName, fileName), `// ${method.toUpperCase()} ${pathKey}`);
      });
    });
  }
  
  createFolderStructure(openapi);