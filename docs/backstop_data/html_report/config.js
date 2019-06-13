report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/yd_qqmap_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20181108-223557/yd_qqmap_0_document_0_phone.png",
        "selector": "document",
        "fileName": "yd_qqmap_0_document_0_phone.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.94",
          "analysisTime": 21
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20181108-223557/failed_diff_yd_qqmap_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/yd_qqmap_0_document_1_tablet.png",
        "test": "../../../backstop_data/bitmaps_test/20181108-223557/yd_qqmap_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "yd_qqmap_0_document_1_tablet.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/zhaoxiaohan/Downloads/yideng/qatest/backstop_data/bitmaps_reference/yd_qqmap_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "yd"
});