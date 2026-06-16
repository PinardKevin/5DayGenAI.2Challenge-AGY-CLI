# BigQuery Release Notes
> **Last Updated Feed**: June 15, 2026  
> **Generated on**: June 16, 2026 04:22 PM  

---

## June 15, 2026

- **Feature**:  Use Gemini Cloud Assist to analyze your SQL queries and receive recommendations to [optimize query performance in BigQuery](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#optimize-query). This feature is available to customers who use BigQuery editions. This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Issue**:  Support for configuring daily token quotas for BigQuery generative AI functions has been temporarily disabled. We are working to restore this feature as soon as possible.
- **Feature**:  You can resize the width of table columns in BigQuery Studio for BigQuery listings such as datasets, repositories, job history, and connections. To resize a column, hover over the column divider and drag it to your preferred width.
- **Feature**:  You can use Gemini Code Assist directly within the BigQuery **Jobs explorer**, **Job details**, **Job history**, and **Capacity management** pages to help you troubleshoot and analyze performance issues. For more information, see [Troubleshoot job performance](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer#get-job-details). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

## June 12, 2026

- **Feature**:  [BigQuery AI functions](https://docs.cloud.google.com/bigquery/docs/generative-ai-overview) can use [`ObjectRef` values](https://docs.cloud.google.com/bigquery/docs/work-with-objectref) directly as input, without calling the `OBJ.GET_ACCESS_URL` function. This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

## June 11, 2026

- **Feature**:  You can [monitor performance, analyze capacity, and optimize costs with Gemini Cloud Assist in BigQuery](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#administer_bigquery). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Feature**:  Support for the [`AI.KEY_DRIVERS` function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-key-drivers) is restored. You can use the `AI.KEY_DRIVERS` function to identify segments of data that cause statistically significant changes to a summable metric.
  This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).

## June 10, 2026

- **Feature**:  BigQuery continuous queries now support the following aggregation functions:
    - [`ARRAY_AGG`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#array_agg) 
    - [`STRING_AGG`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#string_agg) 
  Support for these functions is in [Preview](https://cloud.google.com/products#product-launch-stages).

## June 08, 2026

- **Feature**:  You can [analyze data lineage with Gemini Cloud Assist in BigQuery](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#analyze-lineage). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Feature**:  You can now use Gemini Cloud Assist to [schedule queries](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#schedule_a_query). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Feature**:  You can use the Google-developed, open source [Java Database Connectivity (JDBC) driver for BigQuery](https://docs.cloud.google.com/bigquery/docs/jdbc-for-bigquery) to connect your Java applications to BigQuery. This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).
- **Feature**:  You can use custom constraints with Organization Policy to provide more granular control over specific fields for some BigQuery sharing resources. For more information, see [Manage Sharing data exchanges and listings using custom constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints). This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).
- **Feature**:  [IAM deny policies](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam#deny_access_to_a_resource) for BigQuery are now [generally available](https://cloud.google.com/products#product-launch-stages) (GA).
- **Feature**:  You can manage and limit the costs associated with BigQuery generative AI functions by configuring [daily token quotas](https://docs.cloud.google.com/bigquery/docs/control-genai-costs). Token-based cost management for BigQuery generative AI functions is [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

## June 03, 2026

- **Feature**:  [BigQuery fluid scaling](https://docs.cloud.google.com/bigquery/docs/slots#slot-autoscaling), which provides per-second billing with no minimum duration for autoscaling reservations, is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

## June 02, 2026

- **Feature**:  [Remote functions](https://docs.cloud.google.com/bigquery/docs/remote-functions#create_a_remote_function) now support a custom path in the endpoint URL. You can reuse a single Cloud Run service for multiple BigQuery remote functions by specifying different path suffixes on the same endpoint. This feature is [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

## June 01, 2026

- **Change**:  The Facebook Ads connector for the BigQuery Data Transfer Service now supports data transfers from the following Facebook Ads reports:
    - `AdInsightsMMM` 
    - `Ads` 
    - `AdCreatives` 
    - `AdSets` 
    - `Campaigns` 
    - `AdImages` 
    - `AdLabels` 
    - `Businesses` 
    - `CustomAudiences` 

## May 27, 2026

- **Change**:  An updated version of the [Simba ODBC driver for BigQuery](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers#current_odbc_driver) is now available.

## May 26, 2026

- **Feature**:  The [Data Science Agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent) (DSA) for Colab Enterprise and BigQuery is now [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

## May 20, 2026

- **Announcement**:  BigQuery can re-execute instructions (queries) to try to proactively detect performance, correctness, or functional regressions. These re-executions will have no side effects and will happen with no additional cost or resource consumption. Data access logs may show `bigquery-adminbot@system.gserviceaccount.com` when BigQuery re-executes an instruction.
- **Feature**:  [Python UDFs](https://docs.cloud.google.com/bigquery/docs/user-defined-functions-python) are now [Generally Available](https://cloud.google.com/products/#product-launch-stages) (GA).
  You can use Python UDFs to implement a scalar function in Python and use it in a SQL query. Python UDFs let you install third-party libraries from the [Python Package Index (PyPI)](https://pypi.org/) and let you access external services using a [Cloud resource connection](https://docs.cloud.google.com/bigquery/docs/create-cloud-resource-connection).
- **Feature**:  You can now use the [`AI.AGG` function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-agg) to semantically aggregate unstructured input data based on natural language instructions. This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

## May 18, 2026

- **Feature**:  You can [group reservations](https://docs.cloud.google.com/bigquery/docs/reservations-tasks#prioritize_idle_slots_with_reservation_groups) together to prioritize idle slot sharing within the group. Reservations within a reservation group share idle slots with each other before making them available to other reservations in the project, giving you more control over slot allocation for high-priority workloads. This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).
- **Feature**:  You can now use a [custom organization policy](https://docs.cloud.google.com/bigquery/docs/custom-constraints) to allow or deny specific operations on workload management resources including reservations, assignments, capacity commitments, and BI reservations. This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).
- **Feature**:  You can manage and version control SQL scripts and notebooks with [BigQuery Studio Git repositories](https://docs.cloud.google.com/bigquery/docs/git-repositories), which provide a streamlined, folder-based integration with remote Git repositories. This feature is in [preview](https://cloud.google.com/products/#product-launch-stages).

## May 15, 2026

- **Feature**:  The [`AI.DETECT_ANOMALIES` function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-detect-anomalies) supports calling the function with a single input table that holds both the historical and target data. This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

## May 14, 2026

- **Issue**:  Support for the `AI.KEY_DRIVERS` function [preview](https://cloud.google.com/products/#product-launch-stages) has been temporarily disabled. We are working to restore this feature as soon as possible.

## May 12, 2026

- **Feature**:  You can now use the [`AI.COUNT_TOKENS` function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-count-tokens) to estimate the token count of text input that you provide. For some generative AI functions, you can [view](https://docs.cloud.google.com/bigquery/docs/generative-ai-overview#token_usage) the total number of input, output, thought, and cache tokens for each modality processed by the query. These features are in [Preview](https://cloud.google.com/products#product-launch-stages).

## May 08, 2026

- **Announcement**:  Starting August 11, 2026, the billing label for the BigQuery Data Transfer Service SKU will be updated from `goog-bq-feature-type: DATA_TRANSFER_SERVICE` (uppercase) to `goog-bq-feature-type: data_transfer_service` (lowercase) to provide a more unified and complete view of your costs. This update expands the scope of the label to cover all costs associated with the BigQuery Data Transfer Service, including data transfer orchestration, data load operations, and data merge operations.
  To ensure uninterrupted cost visibility, update your billing exports, dashboards, and reporting queries to include both these labels.

## May 06, 2026

- **Feature**:  You can configure BigQuery sharing listings for multiple regions, which allows you to share datasets and linked replicas across global geographies simultaneously. For more information, see [Create a listing](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings#create_a_listing). This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).
- **Breaking**:  Starting June 1, 2026, due to changes in Google Ads data retention policies, the BigQuery Data Transfer Service connectors for [Google Ads](https://docs.cloud.google.com/bigquery/docs/transfer-changes#June01-google-ads), [Search Ads 360](https://docs.cloud.google.com/bigquery/docs/transfer-changes#June01-search-ads), and [Google Analytics 4](https://docs.cloud.google.com/bigquery/docs/transfer-changes#June01-ga4) will stop populating data for backfill runs with dates earlier than 37 months from the current date.
  For more information about the changes to the Google Ads data retention policies, see [New Data Retention Policy for Google Ads starting June 1, 2026](https://ads-developers.googleblog.com/2026/05/new-data-retention-policy-for-google.html).

## April 30, 2026

- **Breaking**:  Starting May 7, 2026, new transfer configurations that transfer data from Google Ads using the BigQuery Data Transfer Service will require [Multi-factor authentication (MFA) for individual user authentication](https://ads-developers.googleblog.com/2026/04/multi-factor-authentication-requirement.html). For more information, see [May 7, 2026](https://docs.cloud.google.com/bigquery/docs/transfer-changes#May7-google-ads).

## April 29, 2026

- **Breaking**:  [Strict act-as mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode) is enforced globally for all Dataform repositories, requiring the use of a custom service account or user credentials for running Dataform workflows, BigQuery pipelines, notebooks, and data preparations.
- **Feature**:  You can now use the [`VECTOR_INDEX.STATISTICS` function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions#vector_indexstatistics) to calculate how much an indexed table's data has drifted between when a vector index was created and the present. If table data has changed enough to require a [vector index rebuild](https://docs.cloud.google.com/bigquery/docs/vector-index#rebuild_a_vector_index), you can use the [`ALTER VECTOR INDEX REBUILD` statement](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_vector_index_rebuild_statement) to rebuild the vector index without downtime. These features are [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).
- **Feature**:  You can now use the `PARTITION BY` clause of the [`CREATE VECTOR INDEX` statement](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_vector_index_statement) to [partition TreeAH vector indexes](https://docs.cloud.google.com/bigquery/docs/vector-index#partitions). Partitioning enables partition pruning and can decrease I/O costs. This feature is [Generally Available](https://cloud.google.com/products/#product-launch-stages).

## April 28, 2026

- **Feature**:  You can now [create materialized views over active change data capture (CDC) enabled tables](https://docs.cloud.google.com/bigquery/docs/materialized-views-intro#cdc). This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

## April 23, 2026

- **Change**:  An updated version of the [Simba JDBC driver for BigQuery](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers#current_jdbc_driver) is now available.

## April 22, 2026

- **Feature**:  You can now use the [visual graph modeler](https://docs.cloud.google.com/bigquery/docs/graph-modeler) in BigQuery Studio to define BigQuery graph nodes and edges from your BigQuery tables and edit graph schema. This feature is available in [Preview](https://docs.cloud.google.com/products#product-launch-stages).
- **Announcement**:  Dataproc is now called [Managed Service for Apache Spark](https://docs.cloud.google.com/dataproc/docs/concepts/overview). The names for associated API, client library, CLI, and Identity and Access Management (IAM) resources remain unchanged.
- **Announcement**:  BigLake is now called [Google Cloud Lakehouse](https://docs.cloud.google.com/biglake/docs/introduction). BigLake metastore is now called the [Lakehouse runtime catalog](https://docs.cloud.google.com/biglake/docs/about-blms). The names for associated APIs, client libraries, CLI commands, and Identity and Access Management (IAM) remain unchanged and still reference BigLake.
- **Announcement**:  Dataplex Universal Catalog is now called [Knowledge Catalog](https://docs.cloud.google.com/dataplex/docs/introduction). The API, client library, CLI, and Identity and Access Management (IAM) names remain unchanged. For more information, see [Knowledge Catalog overview](https://docs.cloud.google.com/dataplex/docs/introduction).
- **Announcement**:  Looker Studio is now called [Data Studio](https://docs.cloud.google.com/data-studio). The website and endpoint change from `lookerstudio.google.com` to `datastudio.google.com`. You do not need to update your reports for this change, as Data Studio automatically redirects to the new domain. However, if your company uses proxies to restrict access to external sites, your IT administrator needs to add the new domain to your access control list (ACL). The names for associated API, client library, CLI, and Identity and Access Management (IAM) resources remain unchanged. For more information, see [Data Studio returns as new home for Data Cloud assets](https://cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio).
- **Feature**:  [BigQuery graphs](https://docs.cloud.google.com/bigquery/docs/graph-overview) now support the following features:
    - You can [query graphs](https://docs.cloud.google.com/bigquery/docs/conversational-analytics#graphs) using natural language in Conversational Analytics. 
    - You can add [descriptions and synonyms](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/graph-schema-statements#element_table_property_definition) to the labels and properties in your graphs. 
    - For some types of graphs you can [define measures](https://docs.cloud.google.com/bigquery/docs/graph-measures), which lock an aggregation to a key to help you perform complex aggregations without overcounting. To query measures, you transform your graph into a flattened table by using the [`GRAPH_EXPAND` TVF](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/graph-sql-queries#graph_expand), and then query measures in that table with the [`AGG` function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#agg). 
  These features are in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Feature**:  You can now [use the Data Engineering Agent](https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines) to build, modify, and troubleshoot data pipelines in BigQuery. This feature is [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).
- **Feature**:  You can now use the `gemini-embedding-2-preview` model in the [`AI.EMBED`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-embed), [`AI.SIMILARITY`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-similarity), and [`AI.GENERATE_EMBEDDING`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-generate-embedding) functions to generate a single embedding from a combination of input types, including text, image, audio, video, and PDF files. This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

## April 21, 2026

- **Feature**:  You can now [visualize BigQuery graph query results and graph schemas](https://docs.cloud.google.com/bigquery/docs/graph-visualization#visualization-results) directly in BigQuery Studio, without the need of a notebook environment. This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).

## April 20, 2026

- **Change**:  Starting July 25, 2026, the [BigQuery Data Transfer Service for Facebook Ads connector](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer) will update the data type mapping for the `ActionValue` field in the `AdInsightsActions` report from `INT` to `FLOAT`.
- **Feature**:  The following features have been added to [Python UDFs](https://docs.cloud.google.com/bigquery/docs/user-defined-functions-python) during [Preview](https://cloud.google.com/products/#product-launch-stages):
    - Vectorized UDFs with Apache Arrow. You can now create [vectorized Python UDFs](https://docs.cloud.google.com/bigquery/docs/user-defined-functions-python#create-vector-udf-apache) using the Apache Arrow `RecordBatch` interface for improved performance. 
    - Cloud Monitoring integration. Python UDFs now export [metrics](https://docs.cloud.google.com/bigquery/docs/user-defined-functions-python#view_python_udf_metrics) to Cloud Monitoring, including CPU utilization, memory utilization, and maximum concurrent requests per instance. 
    - Container request concurrency. A new option, `container_request_concurrency`, is available for the `CREATE FUNCTION` statement. This option controls the maximum number of concurrent requests per Python UDF container instance. 
    - New quotas. Python UDFs are now subject to [new quotas](https://docs.cloud.google.com/bigquery/quotas#udf_limits) on image storage bytes (10 GiB per project per region) and mutation rate (30 per minute per project per region). 
    - Cost visibility. Python UDF costs can be seen in the `external_service_costs` column in the `INFORMATION_SCHEMA.JOBS` view and in the `ExternalServiceCosts` field in the [Job API](https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/Job#externalservicecost). 
- **Feature**:  You can now [migrate metadata from external data catalogs to BigLake tables for Apache Iceberg](https://docs.cloud.google.com/bigquery/docs/migration/external-metastore-lakehouse-migration). This feature supports external data catalogs such as such as Apache Hive Metastore and Apache Iceberg REST Catalog. This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Feature**:  You can use the [BigQuery MCP server](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp) to perform a range of data-related tasks with your AI applications including:
    - Examining BigQuery resources. 
    - Generating accurate and efficient SQL queries. 
    - Securely executing queries. 
    - Interpreting query results. 
  This feature is [Generally Available](https://cloud.google.com/products#product-launch-stages) (GA).
- **Feature**:  You can now publish a [BigQuery Conversational Analytics agent in Gemini Enterprise](https://docs.cloud.google.com/bigquery/docs/create-data-agents#publish-agent-gemini-enterprise). This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).
- **Feature**:  You can now use the [notebook gallery](https://docs.cloud.google.com/bigquery/docs/notebooks-introduction#notebook_gallery) in the BigQuery web UI as your central hub for discovering and using prebuilt notebook templates. This feature is [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

## April 17, 2026

- **Feature**:  Using [folders](https://docs.cloud.google.com/bigquery/docs/code-asset-folders) to organize and control access to single file code assets is [generally available](https://cloud.google.com/products#product-launch-stages) (GA). In addition, you can perform bulk move and delete operations, refresh folder contents, and view full breadcrumb paths based on resource permissions. For more information, see [Create and manage folders](https://docs.cloud.google.com/bigquery/docs/create-manage-folders).

## April 16, 2026

- **Feature**:  [Conversational analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics) now supports querying Lakehouse tables that connect to the Apache Iceberg REST catalog or are federated to an external catalog. For more information, see [Query BigLake data with natural language](https://docs.cloud.google.com/biglake/docs/conversational-analytics).
  This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Feature**:  You can now use [Colab Data Apps](https://docs.cloud.google.com/bigquery/docs/colab-data-apps) to transform your data analyses from Colab notebooks into polished, interactive applications.
  This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).
- **Feature**:  You can now use the [`AI.KEY_DRIVERS` function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-key-drivers) to identify segments of data that cause statistically significant changes to a summable metric.
  This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).

## April 15, 2026

- **Feature**:  BigQuery Apache Iceberg external tables now support [Iceberg version 3](https://iceberg.apache.org/spec/#version-3-extended-types-and-capabilities), including binary deletion vectors. For more information, see [Apache Iceberg external tables](https://docs.cloud.google.com/bigquery/docs/iceberg-external-tables). This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).
- **Announcement**:  A known issue has been resolved where a materialized view refresh could expose masked or filtered data from fine grained access control policies in error messages. No further action is needed.
- **Feature**:  BigQuery agent analytics is now [generally available](https://cloud.google.com/products#product-launch-stages) (GA) in the Google Agent Developer Kit. [BigQuery agent analytics](https://docs.cloud.google.com/bigquery/docs/bigquery-agent-analytics) is an open source solution that lets you capture, analyze, and visualize multimodal agent interaction data at scale.
- **Feature**:  You can now use [`EXPORT DATA` statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/export-statements#export_to_alloydb) to [reverse ETL BigQuery data to AlloyDB](https://docs.cloud.google.com/bigquery/docs/export-to-alloydb). This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).

## April 13, 2026

- **Feature**:  Support for the `AI.AGG` function [preview](https://cloud.google.com/products/#product-launch-stages) has been temporarily disabled. We are working to restore this feature as soon as possible.
- **Feature**:  To reduce LLM token consumption and query latency when processing large datasets, enable [optimized mode](https://docs.cloud.google.com/bigquery/docs/optimize-ai-functions) using the following [managed AI functions](https://docs.cloud.google.com/bigquery/docs/generative-ai-overview#managed_ai_functions):
    - [`AI.IF`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-if) 
    - [`AI.CLASSIFY`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-classify) 
  This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).
- **Feature**:  The following [managed AI functions](https://docs.cloud.google.com/bigquery/docs/generative-ai-overview#managed_ai_functions) use Gemini to help you filter, join, rank, and classify your data:
    - [`AI.IF`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-if): Filter and join text and unstructured data (such as images, PDFs, audio, or video) based on a condition described in natural language. 
    - [`AI.SCORE`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-score): Rate text and unstructured data (such as images, PDFs, audio, or video) to rank your data by quality, similarity, or other criteria. 
    - [`AI.CLASSIFY`](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-classify): Classify text and unstructured data (such as images, PDFs, audio, or video) into user-defined categories. 
  These functions are [generally available](https://cloud.google.com/products#product-launch-stages) (GA).
- **Feature**:  You can use [visualization cells](https://docs.cloud.google.com/bigquery/docs/create-notebooks#cells) to automatically [generate a visualization](https://docs.cloud.google.com/bigquery/docs/visualize-data-colab) of any DataFrame in your notebook. You can customize the columns, chart type, aggregations, colors, labels, and title.
  This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

## April 10, 2026

- **Feature**:  [SQL cells](https://docs.cloud.google.com/colab/docs/sql-cells) in BigQuery notebooks are now [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

## April 09, 2026

- **Feature**:  The BigQuery Data Transfer Service can now [transfer data from Snowflake to BigQuery](https://docs.cloud.google.com/bigquery/docs/migration/snowflake-transfer). This feature is [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).
- **Feature**:  You can now use stateful operations in [continuous queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction#supported_stateful_operations), which let you perform complex analysis by retaining information across multiple rows or time intervals using `JOIN`s and windowing aggregations. This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).
- **Feature**:  You can now use [BigQuery Graph](https://docs.cloud.google.com/bigquery/docs/graph-overview) to model your data as a graph and perform analysis on a large scale.
    - 
  [Create a graph](https://docs.cloud.google.com/bigquery/docs/graph-create) directly from tables that store entities and relationships between entities. You don't need to modify your existing workflows or replicate your data to use it in graph queries.
    - 
  Use [Graph Query Language (GQL)](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/graph-intro) to find complex, hidden relationships between data points that would be challenging to find using SQL.
    - 
  [Visualize](https://docs.cloud.google.com/bigquery/docs/graph-visualization) your graph schema and graph query results in a notebook.
  This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).

