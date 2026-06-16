Source: https://cloud.google.com/feeds/gcp-release-notes.xml

---

### Breaking Changes
- (Anthos Multi-Cloud) Deprecated gcloud container attached clusters get-credentials.
Use gcloud container fleet memberships get-credentials to get credentials
for a running Attached cluster.

```
gcloud container attached clusters get-credentials
```


```
gcloud container fleet memberships get-credentials
```

### Google Cloud CLI
- Updated Windows bundled Python for the gcloud CLI to 3.14.5.

```
gcloud
```

### AI
- Added gcloud ai tuning-jobs command group to manage Vertex AI supervised fine-tuning jobs.

```
gcloud ai tuning-jobs
```

### App Engine
- Updated the Java SDK to version 5.0.4 build from the open source project
[https://github.com/GoogleCloudPlatform/appengine-java-standard/releases/tag/v5.0.4](https://github.com/GoogleCloudPlatform/appengine-java-standard/releases/tag/v5.0.4).
- fixed [https://github.com/GoogleCloudPlatform/appengine-java-standard/issues/506](https://github.com/GoogleCloudPlatform/appengine-java-standard/issues/506).
[https://github.com/GoogleCloudPlatform/appengine-java-standard/releases/tag/v5.0.4](https://github.com/GoogleCloudPlatform/appengine-java-standard/releases/tag/v5.0.4)
[https://github.com/GoogleCloudPlatform/appengine-java-standard/issues/506](https://github.com/GoogleCloudPlatform/appengine-java-standard/issues/506)

### Artifact Registry
- Added gcloud artifacts image-streaming-cache command group to manage
image streaming caches per region. This group includes create,
describe, delete, and list commands.

```
gcloud artifacts image-streaming-cache
```


```
create
```


```
describe
```


```
delete
```


```
list
```

### BigLake
- Promoted --unity-service-principal-application-id flag for gcloud biglake iceberg catalogs create and update to BETA, making it publicly visible.
- Promoted BigLake catalogs and arguments for gcloud biglake iceberg catalogs to GA.

```
--unity-service-principal-application-id
```


```
gcloud biglake iceberg catalogs create
```


```
update
```


```
gcloud biglake iceberg catalogs
```

### Cloud Data Lineage
- Added gcloud datalineage command group to manage Cloud Data Lineage resources.
- Added gcloud datalineage config describe and gcloud datalineage config update commands to manage Data Lineage configurations.

```
gcloud datalineage
```


```
gcloud datalineage config describe
```


```
gcloud datalineage config update
```

### Cloud Datastream
- Added support for Dataverse, Salesforce Marketing Cloud, and ServiceNow connection profiles to gcloud datastream connection-profiles create and update commands.
- Added support for Dataverse, Salesforce Marketing Cloud, and ServiceNow streams to gcloud datastream streams create and update commands.

```
gcloud datastream connection-profiles create
```


```
update
```


```
gcloud datastream streams create
```


```
update
```

### Cloud Run
- Promoted --readiness_probe in gcloud run deploy and gcloud run services update to GA.

```
--readiness_probe
```


```
gcloud run deploy
```


```
gcloud run services update
```

### Cloud Services
- API Keys: Updated gcloud services api-keys create and update
commands' --api-target flag to accept a colon-separated list of methods
inline (e.g. --api-target="service=foo,methods=m1:m2").

```
gcloud services api-keys
```


```
create
```


```
update
```


```
--api-target
```


```
methods
```


```
--api-target="service=foo,methods=m1:m2"
```

### Cloud Storage
- Promoted gcloud storage batch-operations bucket-operations commands to GA.

```
gcloud storage batch-operations bucket-operations
```

### Cluster Director
- Added support for creating clusters using blueprints in gcloud beta cluster-director clusters create.

```
gcloud beta cluster-director clusters create
```

### Compute Engine
- Promoted --action-on-vm-failed-health-check flag to GA for gcloud compute instance-groups managed create and gcloud compute instance-groups managed update.
- Fixed an issue where waiting for asynchronous operations would fail for certain global nested resources (like cross-site-networks wire-groups).
- Added any-reservation-then-fail choice to --reservation-affinity flag in
beta for gcloud compute instances create,
gcloud compute instances bulk create,
gcloud compute instance-templates create,
gcloud compute instances create-with-container, and
gcloud compute instance-templates create-with-container commands.
- Promoted --include-disks and --exclude-disks flags for gcloud compute machine-images create to the BETA release track.

```
--action-on-vm-failed-health-check
```


```
gcloud compute instance-groups managed create
```


```
gcloud compute instance-groups managed update
```


```
cross-site-networks wire-groups
```


```
any-reservation-then-fail
```


```
--reservation-affinity
```


```
gcloud compute instances create
```


```
gcloud compute instances bulk create
```


```
gcloud compute instance-templates create
```


```
gcloud compute instances create-with-container
```


```
gcloud compute instance-templates create-with-container
```


```
--include-disks
```


```
--exclude-disks
```


```
gcloud compute machine-images create
```

### Kubernetes Engine
- Added --dataplane-optimization-mode flag to gcloud container clusters create to select scalability mode for Dataplane V2.
- Deprecated None value of --release-channel flag from gcloud container clusters create and update command. Use RAPID, REGULAR, STABLE or EXTENDED instead.

```
--dataplane-optimization-mode
```


```
gcloud container clusters create
```

### Network Connectivity
- Updated help text for --region flag in gcloud network-connectivity transports create to include supported regions list.

```
--region
```


```
gcloud network-connectivity transports create
```

### Network Security
- Added gcloud network-security operations command group (describe, wait, list, cancel).
- Promoted project scoping for
gcloud network-security firewall-endpoints commands
(create, delete, describe, list, update) to GA.
- Promoted gcloud network-security security-profiles wildfire-analysis
commands to BETA.
- Promoted
gcloud network-security firewall-endpoints wildfire-verdict-change-requests
commands to beta.
- Promoted WildFire-related flags in
gcloud network-security firewall-endpoints create command to
BETA.
- Promoted WildFire-related flags in
gcloud network-security firewall-endpoints update command to
BETA.

```
gcloud network-security operations
```


```
describe
```


```
wait
```


```
list
```


```
cancel
```


```
gcloud network-security firewall-endpoints
```


```
create
```


```
delete
```


```
describe
```


```
list
```


```
update
```


```
gcloud network-security security-profiles wildfire-analysis
```


```
gcloud network-security firewall-endpoints wildfire-verdict-change-requests
```


```
gcloud network-security firewall-endpoints create
```


```
gcloud network-security firewall-endpoints update
```

### Recaptcha
- Fixed an issue where gcloud recaptcha keys create ignored --testing-score when creating Android or iOS keys.

```
gcloud recaptcha keys create
```


```
--testing-score
```

Subscribe to these release notes at [https://groups.google.com/forum/#!forum/google-cloud-sdk-announce](https://groups.google.com/forum/#!forum/google-cloud-sdk-announce).

QueryData adds support for parameterized secure views (PSVs) to help secure applications that use natural language queries. For more information, see [Secure and control access to application data](https://docs.cloud.google.com/sql/docs/postgres/secure-app-data-parameterized-secure-views-qd).
This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

Support for the accelerator-optimized [g4-standard-48 machine type](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines#g4-vms) for securely running AI and ML workloads is available in [Preview](https://cloud.google.com/products#product-launch-stages), with the following specifications:
- 5th Generation AMD EPYC Turin processor
- AMD SEV
- 1 NVIDIA RTX PRO 6000 GPU

Gemini Enterprise: ServiceNow data store actions and federation
The ServiceNow data store supports federation and assistant actions in Gemini Enterprise.
You can connect a ServiceNow site to search and read incidents, change requests, tasks, and knowledge base articles using natural language. You can also perform actions, such as creating and updating incidents, directly from the Gemini Enterprise app.
This feature is generally available (GA). For more information, see [Connect ServiceNow](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/servicenow).

### Feature
[Spotlight Feature] Ask Gemini Cloud Assist in Feed Management
Google SecOps now provides Gemini Cloud Assist (GCA) directly within the Feed Management interface to help you with feed creation, setup, and general troubleshooting questions.
A new Ask Gemini Cloud Assist button is now available in the Feed Management interface. You can click this button to open the Gemini Cloud Assist panel and ask questions to get guidance on: * Configuring and managing data feeds. * Understanding ingestion pre-requisites and setup steps for different log sources. * Resolving common setup issues.
Note: Gemini Cloud Assist provides recommendations and answers to your questions, but does not perform configuration changes on your behalf. You must apply any recommended changes manually to your feeds.
For more information, see [Feed management overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview).

### Feature
Preview: Before you create Spot VMs, you can view the real-time availability, estimated uptime, historical preemption rate, and pricing for a specific machine type and location. This information helps you maximize the chances of successfully creating Spot VMs and choose the configuration that best fits your workload needs and budget. For more information, see [Use Spot](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models#spot).

The Database Insights remote Model Context Protocol (MCP) server now supports the following advanced query insights tools for AlloyDB for PostgreSQL:
- get_advanced_aggregated_query_stats
- get_advanced_aggregated_wait_event_stats
- get_advanced_time_series_query_stats
- get_advanced_time_series_wait_event_stats
- get_index_recommendations

```
get_advanced_aggregated_query_stats
```


```
get_advanced_aggregated_wait_event_stats
```


```
get_advanced_time_series_query_stats
```


```
get_advanced_time_series_wait_event_stats
```


```
get_index_recommendations
```

For more information, see [Database Insights remote MCP server](https://docs.cloud.google.com/alloydb/docs/reference/mcp/databaseinsights/mcp/index).

### Feature
Use Gemini Cloud Assist to analyze your SQL queries and receive recommendations to [optimize query performance in BigQuery](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#optimize-query). This feature is available to customers who use BigQuery editions. This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

### Issue
Support for configuring daily token quotas for BigQuery generative AI functions has been temporarily disabled. We are working to restore this feature as soon as possible.

### Feature
You can resize the width of table columns in BigQuery Studio for BigQuery listings such as datasets, repositories, job history, and connections. To resize a column, hover over the column divider and drag it to your preferred width.

### Feature
You can use Gemini Code Assist directly within the BigQuery Jobs explorer, Job details, Job history, and Capacity management pages to help you troubleshoot and analyze performance issues. For more information, see [Troubleshoot job performance](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer#get-job-details). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

Limited support for Blockchain Node Engine
Starting June 15, 2026, Blockchain Node Engine will enter a period of limited support.
- New node creation in Blockchain Node Engine and provisioning of new Blockchain RPC endpoints will be disabled.
- Existing nodes and endpoints will continue to function and receive critical updates until the final shutdown date.
- We recommend migrating your workloads to our partner, [Quicknode](https://www.quicknode.com/gcp-node-migration), to avoid service disruption.
New node creation in Blockchain Node Engine and provisioning of new Blockchain RPC endpoints will be disabled.
Existing nodes and endpoints will continue to function and receive critical updates until the final shutdown date.
We recommend migrating your workloads to our partner, [Quicknode](https://www.quicknode.com/gcp-node-migration), to avoid service disruption.
For more information, see the [migration guide](https://docs.cloud.google.com/blockchain-node-engine/docs/migrate-to-quicknode.md).

New filters and group-by options available in Cloud Billing Reports
Cloud Billing has added two filters to the Billing Reports page to help you analyze and understand your costs:
- [Products](https://docs.cloud.google.com/billing/docs/how-to/reports#filter-by-products): Google Cloud
Products
consist of a group of SKUs (potentially from more than one
[Google Cloud Service](https://docs.cloud.google.com/billing/docs/how-to/reports#filter-by-services))
that work together and are sold as a single service, sometimes referred to as
a logical product family or a subscription service. Examples include
Gemini Enterprise and Firebase App Hosting.
- [Originating service](https://docs.cloud.google.com/billing/docs/how-to/reports#filter-by-orig-services)s: An
Originating service
is a Google Cloud service that causes usage in another service. For
example, Google Kubernetes Engine (GKE) can cause usage in Compute Engine. In
this use case, when you are viewing the Compute Engine usage and
costs, GKE is an originating service when it causes usage
in Compute Engine.
[Products](https://docs.cloud.google.com/billing/docs/how-to/reports#filter-by-products): Google Cloud Products consist of a group of SKUs (potentially from more than one [Google Cloud Service](https://docs.cloud.google.com/billing/docs/how-to/reports#filter-by-services)) that work together and are sold as a single service, sometimes referred to as a logical product family or a subscription service. Examples include Gemini Enterprise and Firebase App Hosting.
[Originating service](https://docs.cloud.google.com/billing/docs/how-to/reports#filter-by-orig-services)s: An Originating service is a Google Cloud service that causes usage in another service. For example, Google Kubernetes Engine (GKE) can cause usage in Compute Engine. In this use case, when you are viewing the Compute Engine usage and costs, GKE is an originating service when it causes usage in Compute Engine.
You can also [Group by](https://docs.cloud.google.com/billing/docs/how-to/reports#group-by) the new filters, to summarize your costs by the dimension you select.
- Product: When you
[group by Product](https://docs.cloud.google.com/billing/docs/how-to/reports#group-by-product),
the Report shows your costs and savings summarized by Product.
- Originating service > Service: When you
[group by Originating service > Service](https://docs.cloud.google.com/billing/docs/how-to/reports#group-by-orig-service),
the Report shows your costs and savings summarized by Originating service.
In the report table, you can expand each row for an Originating service
to see your costs summarized by each Service that is associated with the
Originating service.
[group by Product](https://docs.cloud.google.com/billing/docs/how-to/reports#group-by-product)
[group by Originating service > Service](https://docs.cloud.google.com/billing/docs/how-to/reports#group-by-orig-service)
Learn more about [analyzing billing data and cost trends with Reports](https://docs.cloud.google.com/billing/docs/how-to/reports).
Learn how to [view Gemini Enterprise costs in Cloud Billing reports](https://docs.cloud.google.com/billing/docs/how-to/reports/gemini-enterprise-costs).

The [Envoy Compressor Filter](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility#typegoogleapiscomenvoyextensionsfiltershttpcompressorv3compressor) is now GA in the rapid release channel.
To ensure your EnvoyFilter compressor configuration is fully supported, see [Modernize EnvoyFilter compressor configurations](https://docs.cloud.google.com/service-mesh/docs/migrate/modernize-envoyfilter-compressor).

```
EnvoyFilter
```

Preview: Before you create Spot VMs, you can view the following information for a specific machine type and location:
- You can view the real-time obtainability and estimated uptime. This
information helps you maximize your chances of successfully creating
Spot VMs, as well as help ensure that your workload starts
and runs efficiently.
- You can view historical and current preemption rate and pricing. This
information helps you compare and choose the configuration that best fits
your workload needs and budget.
You can view the real-time obtainability and estimated uptime. This information helps you maximize your chances of successfully creating Spot VMs, as well as help ensure that your workload starts and runs efficiently.
You can view historical and current preemption rate and pricing. This information helps you compare and choose the configuration that best fits your workload needs and budget.
For more information, see [View the availability of Spot VMs](https://docs.cloud.google.com/compute/docs/instances/view-vm-availability) and [View the preemption rate and pricing for Spot VMs](https://docs.cloud.google.com/compute/docs/instances/view-spot-preemption-price).

Dataflow has updated and expanded its pipeline update features for streaming jobs:
- Automated stop-and-replace updates: You can perform automated,
declarative stop-and-replace updates to streaming jobs.
- Parallel updates with the same job name: When you perform automated
parallel updates, you can use the same job name for the new replacement job.
- Auto-cancel draining jobs: When performing parallel or stop-and-replace
updates, you can configure Dataflow to automatically cancel
the old job if it does not finish draining after a timeout you specify.
- Update strategy configuration: You can explicitly choose between a
parallel update (update_strategy_parallel_job_update) and a standard
in-place update (update_strategy_in_place_update) while keeping all other
configuration the same.
- Template upsert functionality: When launching pipelines from classic
templates, flex templates, Terraform, or Config Connector, you can use the
create_or_update_job experiment to enable automatic create-or-update
(upsert) behavior. If an active job with the specified name already exists,
it is updated. Otherwise, a new job is created.

```
update_strategy_parallel_job_update
```


```
update_strategy_in_place_update
```


```
create_or_update_job
```

For more information, see [Automated stop and replace](https://docs.cloud.google.com/dataflow/docs/guides/upgrade-guide#automated-stop-replace), [Automated parallel pipeline updates](https://docs.cloud.google.com/dataflow/docs/guides/upgrade-guide#automated-parallel-updates), and [Automatic create or update (upsert) for templates](https://docs.cloud.google.com/dataflow/docs/guides/upgrade-guide#templates-create-or-update).

Various bug fixes and minor product enhancements.

### Feature
Gemini Enterprise: New data stores and support for new actions (Public Preview)
The following data stores are available in Public Preview:
- [AirOps](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/airops)
- [Airtable](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/airtable)
- [Calendly](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/calendly)
- [Dynamics 365](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/dynamics365)
- [Freshservice](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/freshservice)
- [Google Stitch](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/googlestitch)
- [Intercom](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/intercom)
- [MailerLite](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/mailerlite)
- [Zoho CRM](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/zohocrm)
[AirOps](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/airops)
[Airtable](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/airtable)
[Calendly](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/calendly)
[Dynamics 365](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/dynamics365)
[Freshservice](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/freshservice)
[Google Stitch](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/googlestitch)
[Intercom](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/intercom)
[MailerLite](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/mailerlite)
[Zoho CRM](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/zohocrm)
Additionally, support for new actions is available for the following data stores:
- [Smartsheet](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/smartsheet)
- [Wrike](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/wrike)
- [Zoho Projects](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/zohoprojects)
[Smartsheet](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/smartsheet)
[Wrike](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/wrike)
[Zoho Projects](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/zohoprojects)
For more information, see [Connect a third-party data source](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-third-party-data-source).

### Feature
Gemini Enterprise: Observability settings for individual agents (Preview)
You can now configure observability settings for individual agents in Agent Designer employee-made agents. This allows you to monitor metrics in Metrics Explorer and view trace results in Trace Explorer for specific agents.
Observability settings for individual agents are configured inside the agent-level settings. Previously, observability was only available at the application level, which applies to the Core Assistant agent.
This feature is in Public Preview. For more information, see [Manage observability settings](https://docs.cloud.google.com/gemini/enterprise/docs/manage-observability-settings).

### Announcement
Advanced reporting dashboards 4.36
We've released version 4.36 of the advanced reporting dashboards.

### Feature
New child queues filter option
Dashboards that have the Queue Name filter now also have a Child Queues checkbox. Select Yes if you want to include all child queues of the specified queue. There's also a new Child Queues (Yes / No) filter available in Explores that have the Queue Name filter.

### Feature
The Agent & Queue Status (Live) Explore contains new real-time agent and queue metrics
The Agent & Queue Status (Live) Explore contains the following new metrics:
- In Call: the number of agents currently on a call
- Available / Waiting: the number of agents available and waiting for the
next contact
- Contacts in Queue: the number of calls currently waiting in the queue
In Call: the number of agents currently on a call
Available / Waiting: the number of agents available and waiting for the next contact
Contacts in Queue: the number of calls currently waiting in the queue

### Feature
Link directly to CSAT scores in your CRM from the CSAT dashboards
In the CSAT Interactions table of the CSAT - Calls and CSAT - Chats dashboards, next to the Session ID numbers, links to the associated CSAT scores in your CRM are now available. You can go directly to the CSAT scores without needing to search for them in your CRM.
For more information, see [CSAT dashboards](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-csat).

### Feature
Updates to the Real-time Queue Monitoring - Calls dashboard
The Real-time Queue Monitoring - Calls dashboard now includes the following metrics tiles:
- Total Rolled Over Pending Callbacks
- Total Rolled Over Completed Callbacks
- Avg CSAT Calls
Total Rolled Over Pending Callbacks
Total Rolled Over Completed Callbacks
Avg CSAT Calls
For more information, see [Queue monitoring dashboards](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-real-time-queue-monitor).

### Feature
Updates to the Queue Performance dashboards
- The Queue Performance - Calls and Queue Performance - Chats
dashboards now include the following:

A new Interaction Type filter
A new Interaction Type column in the Queue Detailed Table

- A new Interaction Type filter
- A new Interaction Type column in the Queue Detailed Table
- The Queue Performance - Calls dashboard now includes the following
metrics tiles:

Total Rolled Over Completed Callbacks
Total Rolled Over Pending Callbacks

- Total Rolled Over Completed Callbacks
- Total Rolled Over Pending Callbacks
The Queue Performance - Calls and Queue Performance - Chats dashboards now include the following:
- A new Interaction Type filter
- A new Interaction Type column in the Queue Detailed Table
A new Interaction Type filter
A new Interaction Type column in the Queue Detailed Table
The Queue Performance - Calls dashboard now includes the following metrics tiles:
- Total Rolled Over Completed Callbacks
- Total Rolled Over Pending Callbacks
Total Rolled Over Completed Callbacks
Total Rolled Over Pending Callbacks

### Feature
Repeat contact data in the Queue Performance dashboards
The Queue Summary Table of the Queue Performance - Calls and Queue Performance - Chats dashboards now includes the following columns:
- Total Repeat Contacts
- Repeat Contact %
Total Repeat Contacts
Repeat Contact %
For more information, see [Queue Performance dashboards](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-queue-performance).

The following issues were addressed in this release:
- Fixed an issue where Repeat Contact % values in the Queue Summary
Table of the Queue Performance - Calls dashboard exceeded 100%.
- Fixed an issue where the Date filter in Explores returned no results
when is on or after was set for an absolute date.
- Removed the Total Logged in Time metrics tile from the Agent
Availability dashboard.
- Fixed an issue where language labels were missing from the advanced
reporting dashboards.
- Fixed an issue that occurred when filtering by chat ID in the All
Interactions - Chats dashboard. The wrong chat ID appeared in the
Virtual Agent Chats table.
- Fixed an issue where disposition codes were missing or blank for outbound
calls in the Call Agent Metrics (Historical) dashboard.
Fixed an issue where Repeat Contact % values in the Queue Summary Table of the Queue Performance - Calls dashboard exceeded 100%.
Fixed an issue where the Date filter in Explores returned no results when is on or after was set for an absolute date.
Removed the Total Logged in Time metrics tile from the Agent Availability dashboard.
Fixed an issue where language labels were missing from the advanced reporting dashboards.
Fixed an issue that occurred when filtering by chat ID in the All Interactions - Chats dashboard. The wrong chat ID appeared in the Virtual Agent Chats table.
Fixed an issue where disposition codes were missing or blank for outbound calls in the Call Agent Metrics (Historical) dashboard.

### Feature
You can use the error ID provided in permission error messages to help troubleshoot access. Error IDs provide context for the error, including the principal, resource, permission, and supported IAM conditions. This feature is available in [Preview](https://cloud.google.com/products#product-launch-stages).
For more information, see [Permission error messages](https://docs.cloud.google.com/iam/docs/permission-error-messages).

### Announcement
Release 6.3.89 is being rolled out to the first phase of regions as listed [here](https://docs.cloud.google.com/chronicle/docs/soar/overview-and-introduction/soar-gradual-release).
This release contains internal and customer bug fixes.

### Feature
Non-prioritized IoC Matching rules Category
Google SecOps has introduced a new detection category, Non-prioritized IoC Matching rules, as part of the [Curated Detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections) feature. These rule sets integrate with Google's Indicators of Compromise (IoC) feeds and build on curated threat intelligence to identify malicious activities within Google SecOps environments, specifically focusing on threats identifiable through high-fidelity indicators like IPs, domains, and file hashes.
This rules category provides comprehensive coverage for threats often missed by standard managed content, including cryptomining, Command and Control (C2) communications, and the use of malicious anonymization services.
For more information, refer to [Non-prioritized IoC Matching rules category overview](https://docs.cloud.google.com/chronicle/docs/detection/non-prioritized-ioc-matching-threats-category).

Non-prioritized IoC Matching rules Category
Google SecOps has introduced a new detection category, Non-prioritized IoC Matching rules, as part of the [Curated Detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections) feature. These rule sets integrate with Google's Indicators of Compromise (IoC) feeds and build on curated threat intelligence to identify malicious activities within Google SecOps environments, specifically focusing on threats identifiable through high-fidelity indicators like IPs, domains, and file hashes.
This rules category provides comprehensive coverage for threats often missed by standard managed content, including cryptomining, Command and Control (C2) communications, and the use of malicious anonymization services.
For more information, refer to [Non-prioritized IoC Matching rules category overview](https://docs.cloud.google.com/chronicle/docs/detection/non-prioritized-ioc-matching-threats-category).

### Announcement
[Release 6.3.88](https://docs.cloud.google.com/chronicle/docs/soar/release-notes#June_07_2026) is now available for all regions.

### Feature
[BigQuery AI functions](https://docs.cloud.google.com/bigquery/docs/generative-ai-overview) can use [ObjectRef values](https://docs.cloud.google.com/bigquery/docs/work-with-objectref) directly as input, without calling the OBJ.GET_ACCESS_URL function. This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

```
ObjectRef
```


```
OBJ.GET_ACCESS_URL
```

All agent.googleapis.com/processes metrics are retained for 24 months. For more information, see [Data retention](https://docs.cloud.google.com/monitoring/quotas#data_retention_policy).

```
agent.googleapis.com/processes
```

You can now create and query [parameterized secure views](https://docs.cloud.google.com/sql/docs/postgres/parameterized-secure-views) in Cloud SQL for PostgreSQL.
Parameterized secure views let you use PostgreSQL views with more granular access control over your data. While you can issue a GRANT statement to control whether a user can query a PostgreSQL view, a GRANT statement doesn't let you control the data that the view returns based on the user who is making the query.

```
GRANT
```


```
GRANT
```

To gain this level of control, use parameterized secure views. You can define parameters such as a user ID or region within the view. When your application queries the view, a user can provide values for these parameters, which customizes the query results. Using parameterized secure views lets you enforce "least privilege" access to help ensure that your users interact only with the data that is relevant and authorized to them.
This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

### Security
The following images are now rolling out for managed Cloud Service Mesh:
- Sidecar version 1.21.6-asm.36, is rolling out to the rapid release channel.
- Sidecar version 1.20.8-asm.86 is rolling out to the regular release channel.
- Sidecar version 1.19.10-asm.76 is rolling out to the stable release channel.
These rollouts will preempt those [previously announced on June 3, 2026](https://cloud.google.com/feeds/gcp-release-notes.xml#June_03_2026).
These patch releases contain the fix for the vulnerability listed in [GCP-2026-035](https://docs.cloud.google.com/service-mesh/docs/security-bulletins#gcp-2026-035)

### Security
Proxy version csm_mesh_proxy.20260423_RC03 for Gateway API on GKE clusters is rolling out to all Managed Cloud Service Mesh release channels over the next week.

Gemini Enterprise mobile app: General availability (GA) for Google Identity users
The Gemini Enterprise mobile app is generally available (GA) for organizations using Google Identity as their identity provider. Users can access their agents, search enterprise data, utilize voice features, and perform interactive actions from iOS and Android devices.
With this release, administrators can display a configuration QR code on the web app homepage to enable user access by scanning the QR code. For organizations using Microsoft Entra ID, access to the mobile app is in GA with allowlist.
To learn more, see [Configure the mobile app](https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app) and [Use the mobile app](https://docs.cloud.google.com/gemini/enterprise/docs/use-the-mobile-app).

### Announcement
Google Cloud CCaaS 4.40
We've released version 4.40 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule that you have chosen. For more information, see [Deployment schedules](https://cloud.google.com/contact-center/ccai-platform/docs/deployment-schedules).

### Fixed
This release addresses the following issues:
- Fixed an issue with Salesforce where virtual agent responses appeared out of
order in transcripts.
- Fixed an issue where the advanced reporting dashboards didn't load.
- Fixed an issue where PDF and audio attachments weren't visible to agents
after a chat transfer.
- Fixed an issue where end-users were incorrectly placed on hold following a
cold transfer to a queue.
- Fixed an issue where MP3 audio files for agent call deflections couldn't be
uploaded.
- Fixed an issue where agents were automatically logged out due to inactivity
while still engaged in active calls or chats.
- Fixed an issue where a bulk user upload with blank phone number columns
caused existing direct inbound phone numbers to become unassigned from agent
profiles.
Fixed an issue with Salesforce where virtual agent responses appeared out of order in transcripts.
Fixed an issue where the advanced reporting dashboards didn't load.
Fixed an issue where PDF and audio attachments weren't visible to agents after a chat transfer.
Fixed an issue where end-users were incorrectly placed on hold following a cold transfer to a queue.
Fixed an issue where MP3 audio files for agent call deflections couldn't be uploaded.
Fixed an issue where agents were automatically logged out due to inactivity while still engaged in active calls or chats.
Fixed an issue where a bulk user upload with blank phone number columns caused existing direct inbound phone numbers to become unassigned from agent profiles.

#### (2026-R23) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for manual control plane upgrades and node upgrades for existing clusters. For more information about versioning and upgrades, see [GKE versioning and support](https://cloud.google.com/kubernetes-engine/versioning) and [About GKE cluster upgrades](https://cloud.google.com/kubernetes-engine/upgrades).

- Version [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360) is now the default version for cluster creation in the Rapid channel.
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Rapid channel:

1.33.12-gke.1059000
1.34.8-gke.1126000
1.35.5-gke.1057000
1.36.0-gke.2459000

- 1.33.12-gke.1059000
- 1.34.8-gke.1126000
- 1.35.5-gke.1057000
- 1.36.0-gke.2459000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1116000
1.34 to 1.34.8-gke.1218000
1.35 to 1.35.5-gke.1163000
1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.12-gke.1059000
- 1.34.8-gke.1126000
- 1.35.5-gke.1057000
- 1.36.0-gke.2459000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation in the Regular channel.
- The following versions are now available in the Regular channel:

[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Regular channel:

1.33.11-gke.1197000
1.34.7-gke.1499000
1.35.3-gke.2190000

- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1000000
1.34 to 1.34.8-gke.1000000
1.35 to 1.35.5-gke.1000000
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)

1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- The following versions are now available in the Stable channel:

[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation in the Extended channel.
- The following versions are now available in the Extended channel:

[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Extended channel:

1.30.14-gke.2458000 is [[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2608000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1868000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1986000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1492000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1657000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.11-gke.1197000
1.34.7-gke.1499000
1.35.3-gke.2190000

- 1.30.14-gke.2458000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2608000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.31.14-gke.1868000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1986000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1492000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1657000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.30 to [[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.30 to 1.30.14-gke.2530000
1.31 to 1.31.14-gke.1942000
1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

- 1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)

1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.30.14-gke.2458000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2608000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1868000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1986000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.32.13-gke.1492000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1657000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

- 1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation.
- The following versions are now available:

[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following node versions are now available:

[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1000000
1.34 to 1.34.7-gke.1055000
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

### No channel (deprecated)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

### Security
#### (2026-R23) Security updates
This release includes new GKE versions that use updated Container-Optimized OS images. These updated images are cumulative, incorporating security fixes from all Container-Optimized OS versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated Container-Optimized OS image, see the Security release notes for that image. The following table includes links to the release notes for each updated Container-Optimized OS image:
GKE version Container-Optimized OS version Details 1.30.14-gke.2681000 cos-117-18613-613-40 [[cos-117-18613-613-40 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m117#cos-117-18613-613-40_)](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m117#cos-117-18613-613-40_) 1.31.14-gke.2074000 cos-117-18613-613-40 cos-117-18613-613-40 release notes 1.33.12-gke.1166000 cos-121-18867-381-161 [cos-121-18867-381-161 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m121#cos-121-18867-381-161_) 1.35.5-gke.1241000 cos-125-19216-395-55 [cos-125-19216-395-55 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m125#cos-125-19216-395-55_) 1.36.0-gke.2459000 cos-129-19506-120-64 [cos-129-19506-120-64 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m129#cos-129-19506-120-64_)

#### (2026-R23) Version updates
- The following versions are now available in the Stable channel:

[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

#### (2026-R23) Version updates
- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation in the Regular channel.
- The following versions are now available in the Regular channel:

[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Regular channel:

1.33.11-gke.1197000
1.34.7-gke.1499000
1.35.3-gke.2190000

- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1000000
1.34 to 1.34.8-gke.1000000
1.35 to 1.35.5-gke.1000000
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)

1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

#### (2026-R23) Version updates
- Version [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360) is now the default version for cluster creation in the Rapid channel.
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Rapid channel:

1.33.12-gke.1059000
1.34.8-gke.1126000
1.35.5-gke.1057000
1.36.0-gke.2459000

- 1.33.12-gke.1059000
- 1.34.8-gke.1126000
- 1.35.5-gke.1057000
- 1.36.0-gke.2459000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1116000
1.34 to 1.34.8-gke.1218000
1.35 to 1.35.5-gke.1163000
1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.12-gke.1059000
- 1.34.8-gke.1126000
- 1.35.5-gke.1057000
- 1.36.0-gke.2459000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

#### (2026-R23) Version updates
- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation.
- The following versions are now available:

[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following node versions are now available:

[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1000000
1.34 to 1.34.7-gke.1055000
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1166000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1278000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1241000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3009002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.3070003](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

#### (2026-R23) Version updates
- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation in the Extended channel.
- The following versions are now available in the Extended channel:

[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Extended channel:

1.30.14-gke.2458000 is [[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2608000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1868000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1986000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1492000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1657000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.11-gke.1197000
1.34.7-gke.1499000
1.35.3-gke.2190000

- 1.30.14-gke.2458000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2608000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.31.14-gke.1868000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1986000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1492000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1657000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.30 to [[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.30 to 1.30.14-gke.2530000
1.31 to 1.31.14-gke.1942000
1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

- 1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)

1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2681000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.2074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1729000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.30.14-gke.2458000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2608000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1868000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1986000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.32.13-gke.1492000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1657000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1197000
- 1.34.7-gke.1499000
- 1.35.3-gke.2190000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

- 1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.29 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.30 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.30 to [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

### Feature
[Spotlight Feature] Search for cases using SIEM Search
Google SecOps SIEM Search now provides robust capabilities for analyzing cases and case history alongside existing Unified Data Model (UDM) events and entities. This update allows security analysts to seamlessly correlate case details with other security telemetry within a single interface, streamlining workflows and accelerating incident response.
Key Highlights:
- Unified Search Experience: Conduct searches across UDM events, entities, cases, and case history from a single SIEM Search interface.
- Correlate SIEM and SOAR Data: Effortlessly link case details and historical activities with security data, reducing context switching and improving investigation efficiency.
Unified Search Experience: Conduct searches across UDM events, entities, cases, and case history from a single SIEM Search interface.
Correlate SIEM and SOAR Data: Effortlessly link case details and historical activities with security data, reducing context switching and improving investigation efficiency.
For more information, see [Search cases and case history](https://docs.cloud.google.com/chronicle/docs/investigation/search-and-search-case-history).

### Feature
[Spotlight Feature] Investigate detections in Google SecOps Search
Google SecOps Search now supports querying, filtering, and analyzing system-generated detections. When searching on events or entities, matching detections will now appear in the Alerts and Detections tab, providing a more holistic workflow for threat investigation.
For more details, see [Investigate detections in Search](https://docs.cloud.google.com/chronicle/docs/investigation/investigate-detections-in-search).

### Announcement
Asynchronous Search APIs for large datasets
Google SecOps now supports asynchronous Search APIs that let you perform long-running queries without blocking your applications. This is ideal for searches that return a large volume of results.
- Non-blocking queries: Initiate searches and receive an operation ID to
track progress, so your application remains responsive.
- Handle large result sets: Retrieve up to 1 million results from data
sources including Unified Data Model (UDM) events, data tables, and Entity
Context Graph (ECG).
- Paginated results: View results efficiently in manageable pages.
For more information, see [Asynchronous Search APIs](https://docs.cloud.google.com/chronicle/docs/investigation/search-lro-api) and [Result limits for data sources](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search#resultLimitsDataSources).

### Feature
[Spotlight Feature] Investigate detections in Google SecOps Search
Google SecOps Search now supports querying, filtering, and analyzing system-generated detections. When searching on events or entities, matching detections will now appear in the Alerts and Detections tab, providing a more holistic workflow for threat investigation.
For more details, see [Investigate detections in Search](https://docs.cloud.google.com/chronicle/docs/investigation/investigate-detections-in-search).

### Announcement
Asynchronous Search APIs for large datasets
Google SecOps now supports asynchronous Search APIs that let you perform long-running queries without blocking your applications. This is ideal for searches that return a large volume of results.
- Non-blocking queries: Initiate searches and receive an operation ID to
track progress, so your application remains responsive.
- Handle large result sets: Retrieve up to 1 million results from data
sources including Unified Data Model (UDM) events, data tables, and Entity
Context Graph (ECG).
- Paginated results: View results efficiently in manageable pages.
For more information, see [Asynchronous Search APIs](https://docs.cloud.google.com/chronicle/docs/investigation/search-lro-api) and [Result limits for data sources](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search#resultLimitsDataSources).

New Managed Airflow (Gen 2) environments created while the Restrict Endpoint Usage organization policy is active now use regional endpoints for services like Cloud Storage, Cloud Logging, Pub/Sub, and Data Lineage. For more information, see [Configure environments with Restrict Endpoint Usage policy](https://docs.cloud.google.com/composer/docs/composer-2/configure-restrict-endpoint-usage-environments).

### Feature
The maximum cacheable object size for Media CDN can be increased up to 1 TiB. To request a limit increase for your project, contact your Google support representative. This feature is Generally Available.
For more information, see [Quotas and limits](https://docs.cloud.google.com/media-cdn/quotas).

### Feature
Media CDN lets you identify the country codes of the edge caches serving client requests. This feature is Generally Available.
For more information, see [Custom headers](https://docs.cloud.google.com/media-cdn/docs/custom-headers#header-variables).

### Feature
Added support for inspecting and de-identifying batched content. You can now include a [Batch[ContentItem](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem)](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem#BatchContentItem) in your ContentItem requests.

```
[BatchContentItem](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem#BatchContentItem)
```


```
[ContentItem](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem)
```

### Feature
You can [monitor performance, analyze capacity, and optimize costs with Gemini Cloud Assist in BigQuery](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#administer_bigquery). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

### Feature
Support for the [AI.KEY_DRIVERS function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-key-drivers) is restored. You can use the AI.KEY_DRIVERS function to identify segments of data that cause statistically significant changes to a summable metric.

```
AI.KEY_DRIVERS
```


```
AI.KEY_DRIVERS
```

This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).

In an autoscaled managed instance group (MIG), you can configure the stabilization period to manage how quickly the autoscaler deletes instances after a decrease in the load. This configuration can help optimize costs or maintain extra capacity based on your workload requirements. For more information, see [Configure stabilization period](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers#configure_stabilization_period).

The VMware Engine [ve2 node type](https://docs.cloud.google.com/vmware-engine/docs/concepts/node-types) is now available in the following additional region:

```
ve2
```

- Mexico City (northamerica-south1)

```
northamerica-south1
```

Siemplify: Version 109.0
- Refactored the code in the following action:

Attach Playbook to Alert

- Attach Playbook to Alert
Refactored the code in the following action:
- Attach Playbook to Alert

### Feature
Knowledge Catalog now supports data profile scans for unstructured data (such as PDFs in Cloud Storage) on existing BigQuery object tables. This feature uses Vertex AI Gemini models to extract semantic insights, including entities and relationships, from unstructured content.
[Preview](https://cloud.google.com/products#product-launch-stages)
For more information, see [About unstructured data insights](https://docs.cloud.google.com/dataplex/docs/data-insights-unstructured-data) and [Use data profile for unstructured data](https://docs.cloud.google.com/dataplex/docs/use-data-profile-unstructured-data).

### Change
Agent Assist offers [Proactive generative knowledge assist](https://docs.cloud.google.com/agent-assist/docs/pgka) V2 in GA. This version supports rich search context, multiple suggested queries, and granular control over triggering events.

BigQuery continuous queries now support the following aggregation functions:
- [ARRAY_AGG](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#array_agg)
- [STRING_AGG](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#string_agg)
[ARRAY_AGG](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#array_agg)

```
ARRAY_AGG
```

[STRING_AGG](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#string_agg)

```
STRING_AGG
```

Support for these functions is in [Preview](https://cloud.google.com/products#product-launch-stages).

Multi-project access to Cloud Billing cost views available in Preview
In Cloud Billing accounts, multi-project access to usage costs lets project owners, solution owners, developers, and other non-billing admins see cost data for all of their authorized projects in a single view in the Cloud Billing console.
The multi-project view uses a combination of Cloud Billing account permissions and Google Cloud project permissions that let Cloud Billing administrators and organization administrators jointly control access to project-level cost data.
Using project-scoped Cloud Billing account permissions, Cloud Billing administrators can control which solution owners can view aggregated cost data in the Cloud Billing console.
- Learn more about [cost management for project owners](https://docs.cloud.google.com/billing/docs/how-to/project-owners/overview).
- Learn how to [set up multi-project access to costs views](https://docs.cloud.google.com/billing/docs/how-to/project-owners/setup-multi-project-access).
[cost management for project owners](https://docs.cloud.google.com/billing/docs/how-to/project-owners/overview)
[set up multi-project access to costs views](https://docs.cloud.google.com/billing/docs/how-to/project-owners/setup-multi-project-access)

The configuration option to not enroll your cluster in a release channel (known as No channel, formerly as Static) is now deprecated, and will be removed on June 14, 2027. For any clusters not enrolled in a release channel, we recommend that you [enroll the cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/release-channels#existing-cluster) before this date. After the removal date, GKE will enroll all remaining clusters in the Stable channel. For more information about this deprecation and how you can achieve the same functionality with release channels, see [Clusters not enrolled in a release channel](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels#no_channel).

### Change
Azure Security Center: Version 17.0
- Announced deprecation notice. Connector will be deprecated on 30th March 2027. 
Only critical bug fixes will be considered. For more information refer to the 
documentation of individual connectors in the following connector:

Azure Security Center - Security Alerts Connector

- Azure Security Center - Security Alerts Connector
Announced deprecation notice. Connector will be deprecated on 30th March 2027. Only critical bug fixes will be considered. For more information refer to the documentation of individual connectors in the following connector:
- Azure Security Center - Security Alerts Connector

### Change
Google Chronicle: Version 85.0
- Updated partial batch handling and added dynamic batch sizing to prevent 
timeout loops, refactored logging and added monitoring signals for process 
health, and pipeline states, and improved detections batch parsing and 
processing efficiency in the following connector:

Chronicle Alerts Connector

- Chronicle Alerts Connector
- Integration: Updated authentication flow mechanism.
Updated partial batch handling and added dynamic batch sizing to prevent timeout loops, refactored logging and added monitoring signals for process health, and pipeline states, and improved detections batch parsing and processing efficiency in the following connector:
- Chronicle Alerts Connector
Integration: Updated authentication flow mechanism.

### Change
Google Cloud IAM: Version 20.0
- Updated Predefined Widgets in the following widgets:

List Roles
List Service Accounts

- List Roles
- List Service Accounts
Updated Predefined Widgets in the following widgets:
- List Roles
- List Service Accounts
List Roles
List Service Accounts

### Change
Microsoft Azure Sentinel: Version 64.0
- Announced deprecation notice. Connector will be deprecated on 30th March 2027. 
Only critical bug fixes will be considered. For more information refer to the 
documentation of individual connectors in the following connectors:

Microsoft Azure Sentinel Incident Connector v2
Microsoft Sentinel Incident Tracking Connector

- Microsoft Azure Sentinel Incident Connector v2
- Microsoft Sentinel Incident Tracking Connector
Announced deprecation notice. Connector will be deprecated on 30th March 2027. Only critical bug fixes will be considered. For more information refer to the documentation of individual connectors in the following connectors:
- Microsoft Azure Sentinel Incident Connector v2
- Microsoft Sentinel Incident Tracking Connector
Microsoft Azure Sentinel Incident Connector v2
Microsoft Sentinel Incident Tracking Connector

### Change
Microsoft Defender ATP: Version 32.0
- Announced deprecation notice. Connector will be deprecated on 30th March 2027. 
Only critical bug fixes will be considered. For more information refer to the 
documentation of individual connectors in the following connectors:

Microsoft Defender ATP Connector
Microsoft Defender ATP Connector V2

- Microsoft Defender ATP Connector
- Microsoft Defender ATP Connector V2
Announced deprecation notice. Connector will be deprecated on 30th March 2027. Only critical bug fixes will be considered. For more information refer to the documentation of individual connectors in the following connectors:
- Microsoft Defender ATP Connector
- Microsoft Defender ATP Connector V2
Microsoft Defender ATP Connector
Microsoft Defender ATP Connector V2

### Change
Microsoft Graph Mail: Version 42.0
- Updated the logic for robust handling of transient upstream API errors and 
connection issues in the following connector:

Microsoft Graph Mail Connector

- Microsoft Graph Mail Connector
Updated the logic for robust handling of transient upstream API errors and connection issues in the following connector:
- Microsoft Graph Mail Connector

### Change
Microsoft Graph Mail Delegated: Version 19.0
- Updated the logic for robust handling of transient upstream API errors and 
connection issues in the following connector:

Microsoft Graph Mail Delegated Connector

- Microsoft Graph Mail Delegated Connector
Updated the logic for robust handling of transient upstream API errors and connection issues in the following connector:
- Microsoft Graph Mail Delegated Connector

### Change
Microsoft Graph Security: Version 27.0
- Announced deprecation notice. Connector will be deprecated on 30th March 2027. 
Only critical bug fixes will be considered. For more information refer to the 
documentation of individual connectors in the following connectors:

Microsoft Graph Office 365 Security and Compliance Connector
Microsoft Graph Security Connector

- Microsoft Graph Office 365 Security and Compliance Connector
- Microsoft Graph Security Connector
Announced deprecation notice. Connector will be deprecated on 30th March 2027. Only critical bug fixes will be considered. For more information refer to the documentation of individual connectors in the following connectors:
- Microsoft Graph Office 365 Security and Compliance Connector
- Microsoft Graph Security Connector
Microsoft Graph Office 365 Security and Compliance Connector
Microsoft Graph Security Connector

### Change
Protectwise: Version 7.0
- Refactored the code in the following action:

Get Pcap

- Get Pcap
Refactored the code in the following action:
- Get Pcap

### Change
Qualys VM: Version 28.0
- Fixed AttributeError during parsing of multiple host lists and added fallback 
hostname matching in the following actions:

List Endpoint Detections
Enrich Host

- List Endpoint Detections
- Enrich Host
Fixed AttributeError during parsing of multiple host lists and added fallback hostname matching in the following actions:
- List Endpoint Detections
- Enrich Host
List Endpoint Detections
Enrich Host

### Feature
Organization Policy Service custom constraints are [generally available](https://cloud.google.com/products#product-launch-stages) for Cloud Domains. For more information, see [Use custom organization policies](https://docs.cloud.google.com/domains/docs/custom-constraints).

### Announcement
1.29.4-asm.0 is now available for in-cluster Cloud Service Mesh.
You can now download 1.29.4-asm.0 for in-cluster Cloud Service Mesh. It includes the features of [Istio 1.29.4](https://istio.io/latest/news/releases/1.29.x/announcing-1.29/) subject to the list of [supported features](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster).
The following environment variables, labels, and annotations are not supported:
- PILOT_IGNORE_RESOURCES and PILOT_INCLUDE_RESOURCES
- RetryIgnorePreviousHosts
- omit_empty_values
- PILOT_SPAWN_UPSTREAM_SPAN_FOR_GATEWAY
- MAX_CONNECTIONS_PER_SOCKET_EVENT_LOOP with the value 1
- PILOT_DNS_JITTER_DURATION
- PILOT_DNS_JITTER_DURATION
- ENABLE_NATIVE_SIDECARS with the value true
- PILOT_IP_AUTOALLOCATE_IPV4_PREFIX and PILOT_IP_AUTOALLOCATE_IPV6_PREFIX
- PILOT_DNS_CARES_UDP_MAX_QUERIES
- ENABLE_WILDCARD_HOST_SERVICE_ENTRIES_FOR_TLS
- 'BLOCKED_CIDRS_IN_JWKS_URIS`
- ENABLE_DEBUG_ENDPOINT_AUTH
- DISABLE_TRACK_REMAINING_CB_METRICS
- gateway.istio.io/tls-cipher-suites
- fileFlushMinSizeKB and fileFlushInterval settings in ProxyConfig
- topology.istio.io/locality
- statsCompression ProxyConfig option
- proxy.istio.io/config annotation for metric compression overrides

```
PILOT_IGNORE_RESOURCES
```


```
PILOT_INCLUDE_RESOURCES
```


```
RetryIgnorePreviousHosts
```


```
omit_empty_values
```


```
PILOT_SPAWN_UPSTREAM_SPAN_FOR_GATEWAY
```


```
MAX_CONNECTIONS_PER_SOCKET_EVENT_LOOP
```


```
PILOT_DNS_JITTER_DURATION
```


```
PILOT_DNS_JITTER_DURATION
```


```
ENABLE_NATIVE_SIDECARS
```


```
PILOT_IP_AUTOALLOCATE_IPV4_PREFIX
```


```
PILOT_IP_AUTOALLOCATE_IPV6_PREFIX
```


```
PILOT_DNS_CARES_UDP_MAX_QUERIES
```


```
ENABLE_WILDCARD_HOST_SERVICE_ENTRIES_FOR_TLS
```


```
ENABLE_DEBUG_ENDPOINT_AUTH
```


```
DISABLE_TRACK_REMAINING_CB_METRICS
```


```
gateway.istio.io/tls-cipher-suites
```


```
fileFlushMinSizeKB
```


```
fileFlushInterval
```


```
topology.istio.io/locality
```


```
statsCompression
```


```
proxy.istio.io/config
```

Istio's experimental feature to enable lazy subset creation of envoy statistics is not supported.
The formatter option within the spec.tracing[].customTags field of the Telemetry custom resource (telemetry.istio.io) is unsupported.

```
spec.tracing[].customTags
```

The istiod_remote_cluster_sync_status Prometheus gauge metric, exposed on the Istiod control plane metrics endpoint (port 15014 /metrics), is not supported.

```
istiod_remote_cluster_sync_status
```


```
/metrics
```

The following are unsupported for proxyless gRPC clients:
- Configuring the LEAST_REQUEST load balancing policy within the
spec.trafficPolicy.loadBalancer.simple field of a DestinationRule custom
resource (networking.istio.io)
- Configuring the http2MaxRequests circuit breaker within the
spec.trafficPolicy.connectionPool.http.http2MaxRequests field of a
DestinationRule custom resource (networking.istio.io)
Configuring the LEAST_REQUEST load balancing policy within the spec.trafficPolicy.loadBalancer.simple field of a DestinationRule custom resource (networking.istio.io)

```
LEAST_REQUEST
```


```
spec.trafficPolicy.loadBalancer.simple
```


```
networking.istio.io
```

Configuring the http2MaxRequests circuit breaker within the spec.trafficPolicy.connectionPool.http.http2MaxRequests field of a DestinationRule custom resource (networking.istio.io)

```
http2MaxRequests
```


```
spec.trafficPolicy.connectionPool.http.http2MaxRequests
```


```
networking.istio.io
```

The ENABLE_AUTO_SNI flag is still supported to keep aligned with the legacy behavior.

```
ENABLE_AUTO_SNI
```

For details on upgrading Cloud Service Mesh, see [Upgrade Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs/upgrade/upgrade). Cloud Service Mesh version 1.29.4-asm.0 uses Envoy v1.37.4-dev.

### Announcement
In-cluster Cloud Service Mesh 1.26 is no longer supported. For more information and to view the earliest end-of-life dates for other versions, see [Supported versions](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster#supported_versions).

A vulnerability (CVE-2025-10263) about bypass of translation stages or GPT protections in some Arm core families was discovered and has been addressed. For more information, see the [GCP-2026-036 security bulletin](https://docs.cloud.google.com/compute/docs/security-bulletins#gcp-2026-036).

Various bug fixes and minor product enhancements.

Gemini Enterprise: Share agents with Google Groups
End users can share agents created using Agent Designer with Google Identity groups, provided an administrator has enabled this feature for the Gemini Enterprise app.
This feature is generally available (GA). For more information, see [Share an agent](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/share-agent).

Anthropic's Claude Fable 5
[Claude Fable 5](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/fable-5) is available in Model Garden.

### Announcement
Mobile SDK for Android version 2.15.3 patch
We've released version 2.15.3 of the Mobile SDK for Android.

### Fixed
This release addresses the following issues:
- Fixed an issue where UjetWebFormCallback in the Android SDK lacked the
necessary methods to pass form data.
- Fixed an issue where chat messages and content cards in the Mobile SDK
displayed out of order.
- Fixed an issue where the Android SDK didn't start a new chat session after
the previous session ended.
- Fixed an issue where customers couldn't customize the Android SDK to
display the timeout message to end-users.
Fixed an issue where UjetWebFormCallback in the Android SDK lacked the necessary methods to pass form data.

```
UjetWebFormCallback
```

Fixed an issue where chat messages and content cards in the Mobile SDK displayed out of order.
Fixed an issue where the Android SDK didn't start a new chat session after the previous session ended.
Fixed an issue where customers couldn't customize the Android SDK to display the timeout message to end-users.

UDM fields now show the sources of enrichment
The new Enrichment feature introduces improvements for managing and understanding your data. Each UDM field is now labeled with an icon to indicate its data source: U for unenriched fields and E for enriched fields. Enriched fields contain additional metadata values that indicate the source of the enriched data.
For more information, see: [Viewing events](https://docs.cloud.google.com/chronicle/docs/event-processing/data-enrichment#viewing_events).

UDM fields now show the sources of enrichment
The new Enrichment feature introduces improvements for managing and understanding your data. Each UDM field is now labeled with an icon to indicate its data source: U for unenriched fields and E for enriched fields. Enriched fields contain additional metadata values that indicate the source of the enriched data.
For more information, see: [Viewing events](https://docs.cloud.google.com/chronicle/docs/event-processing/data-enrichment#viewing_events).

### Feature
The backup capabilities for [ONTAP-mode](https://docs.cloud.google.com/netapp/volumes/docs/ontap/overview#about_ontap-mode) are generally available (GA). For more information, see [About backups](https://docs.cloud.google.com/netapp/volumes/docs/protect-data/about-backups).

### Feature
Google Cloud NetApp Volumes remote Model Context Protocol (MCP) server is generally available. NetApp Volumes remote MCP server lets you manage storage pools, volumes, backup vaults, backup policies, backups, and snapshots from LLMs, AI applications, and AI-enabled development platforms. For more information, see [Use the NetApp Volumes remote MCP server](https://docs.cloud.google.com/netapp/volumes/docs/deploy-use-cases/mcp/use-netapp-mcp) and [NetApp Volumes MCP Reference](https://docs.cloud.google.com/netapp/volumes/docs/reference/mcp).

[NCC Gateway](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview) is [generally available](https://cloud.google.com/products#product-launch-stages).
NCC Gateway lets you enable security functions, such as third-party Security Service Edge (SSE), for cross-cloud network traffic. You can use [Secure Access Connect](https://docs.cloud.google.com/secure-access-connect/docs/overview) with NCC Gateway to securely connect remote workforces to private applications in Google Cloud, on-premises, or other cloud providers and to public applications, like Palo Alto Networks Prisma Access.
For information about pricing, see [NCC Gateway pricing](https://cloud.google.com/network-connectivity/pricing#ncc-gateway-pricing).

[Policy Simulator for deny policies](https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview) is [generally available](https://cloud.google.com/products#product-launch-stages).

### Announcement
The [Pub/Sub Lite to Managed Service for Apache Kafka migration guide](https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka) has been updated to use the latest client libraries and to use [Kafka Connect](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/kafka-connect-overview) in Managed Service for Apache Kafka.

### Announcement
On June 8th, 2026, we released an updated version of Apigee (1-17-0-apigee-9).

### v1.16.5
On June 8, 2026 we released an updated version of the Apigee hybrid software, v1.16.5.
- For information on upgrading, see [Upgrading Apigee hybrid to version v1.16.5](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/upgrade).
- For information on new installations, see [The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/big-picture).
[Upgrading Apigee hybrid to version v1.16.5](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/upgrade)
[The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/big-picture)
[Apigee release process](https://docs.cloud.google.com/apigee/docs/release/apigee-release-process#apigee-hybrid-container-images)

### Security
Various security and CVE fixes are included in this release.

App Hub support for resources from [Memorystore](https://docs.cloud.google.com/app-hub/docs/supported-resources) is now generally available ([GA](https://cloud.google.com/products#product-launch-stages)).

### Feature
You can [analyze data lineage with Gemini Cloud Assist in BigQuery](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#analyze-lineage). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

### Feature
You can now use Gemini Cloud Assist to [schedule queries](https://docs.cloud.google.com/bigquery/docs/use-cloud-assist#schedule_a_query). This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

### Feature
You can use the Google-developed, open source [Java Database Connectivity (JDBC) driver for BigQuery](https://docs.cloud.google.com/bigquery/docs/jdbc-for-bigquery) to connect your Java applications to BigQuery. This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

### Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some BigQuery sharing resources. For more information, see [Manage Sharing data exchanges and listings using custom constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints). This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

### Feature
[IAM deny policies](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam#deny_access_to_a_resource) for BigQuery are now [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

### Feature
You can manage and limit the costs associated with BigQuery generative AI functions by configuring [daily token quotas](https://docs.cloud.google.com/bigquery/docs/control-genai-costs). Token-based cost management for BigQuery generative AI functions is [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

FOCUS billing data export to BigQuery available in Preview
[Cloud Billing data export to BigQuery](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery) now offers a FOCUS billing data export available in [Preview](https://cloud.google.com/products#product-launch-stages). The [FinOps Open Cost and Usage Specification (FOCUS)](https://focus.finops.org/what-is-focus/) is an open specification that defines clear requirements for technology billing data generators to produce consistent cost and usage datasets. The Google Cloud billing data export using the [FOCUS specifications](https://focus.finops.org/focus-specification/) includes FOCUS columns up to [FOCUS version 1.2](https://focus.finops.org/focus-specification/v1-2/).
For more information about the FOCUS billing data export to BigQuery, refer to the following documentation:
- [Set up FOCUS Cloud Billing data export to BigQuery](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-focus-setup)
- [Structure of the FOCUS data export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/focus-export)
- [FOCUS conformance report](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/focus-export#conformance-report)
- [Query examples for FOCUS use cases](https://focus.finops.org/use-cases/?version=v1-2)
[Set up FOCUS Cloud Billing data export to BigQuery](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-focus-setup)
[Structure of the FOCUS data export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/focus-export)
[FOCUS conformance report](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/focus-export#conformance-report)
[Query examples for FOCUS use cases](https://focus.finops.org/use-cases/?version=v1-2)

Cloud SQL for MySQL [managed buffer pool](https://docs.cloud.google.com/sql/docs/mysql/optimize-high-memory-usage#enable-managed-buffer-pool) is now generally available ([GA](https://cloud.google.com/products/#product-launch-stages)). Managed buffer pool helps you avoid out-of-memory events (OOMs) on your Cloud SQL instance by reducing innodb_buffer_pool_size when memory usage is high.

```
innodb_buffer_pool_size
```

### Security
1.28.7-asm.4 is now available for in-cluster Cloud Service Mesh.
This patch release contains the fix for the security vulnerability listed in [GCP-2026-035](https://docs.cloud.google.com/service-mesh/docs/security-bulletins#gcp-2026-035).
For details on upgrading Cloud Service Mesh, see [Upgrade Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs/upgrade/upgrade). Cloud Service Mesh 1.28.7-asm.4 uses Envoy v1.36.8-dev.

### Security
1.27.9-asm.5 is now available for in-cluster Cloud Service Mesh.
This patch release contains the fix for the security vulnerability listed in [GCP-2026-035](https://docs.cloud.google.com/service-mesh/docs/security-bulletins#gcp-2026-035).
For details on upgrading Cloud Service Mesh, see [Upgrade Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/v1.27/docs/upgrade/upgrade). Cloud Service Mesh 1.27.9-asm.5 uses Envoy v1.35.12-dev.

### Security
1.26.8-asm.11 is now available for in-cluster Cloud Service Mesh.
This patch release contains the fix for the security vulnerability listed in [GCP-2026-035](https://docs.cloud.google.com/service-mesh/docs/security-bulletins#gcp-2026-035).
For details on upgrading Cloud Service Mesh, see [Upgrade Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/v1.26/docs/upgrade/upgrade). Cloud Service Mesh 1.26.8-asm.11 uses Envoy v1.34.14.

### Announcement
The rollouts [previously announced on June 3, 2026](https://cloud.google.com/feeds/gcp-release-notes.xml#June_03_2026) have been stopped. The following release will supersede them and include those patches and the fix for the vulnerability listed in [GCP-2026-035](https://docs.cloud.google.com/service-mesh/docs/security-bulletins#gcp-2026-035).

The Trace API supports regional endpoints. For a list of supported endpoints, see the REST API reference pages:
- [v1 REST reference](https://docs.cloud.google.com/trace/docs/reference/v1/rest?rep_location=global)
- [v2 REST reference](https://docs.cloud.google.com/trace/docs/reference/v2/rest?rep_location=global)
[v1 REST reference](https://docs.cloud.google.com/trace/docs/reference/v1/rest?rep_location=global)
[v2 REST reference](https://docs.cloud.google.com/trace/docs/reference/v2/rest?rep_location=global)

The workstation configuration creation page in the Google Cloud console has been optimized to make configuration creation faster and easier. Common machine settings are grouped into selectable machine presets, frequently used settings are consolidated on the Configuration essentials landing page, and a pending cluster with default settings is automatically provisioned when no cluster exists in your selected region.

Generally available: The [C4D](https://docs.cloud.google.com/compute/docs/general-purpose-machines#supported_disk_types_for_c4d) machine series supports Hyperdisk Balanced High Availability disks.
For more information, see [About Hyperdisk Balanced High Availability](https://docs.cloud.google.com/compute/docs/disks/hd-types/hyperdisk-balanced-ha) and [Performance limits for machine series](https://docs.cloud.google.com/compute/docs/disks/hyperdisk-perf-limits#hdbha-perf).

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-125-19216-395-73
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.85
[See List](https://storage.googleapis.com/cos-tools/19216.395.73/lakitu/gpu_driver_versions.textproto)

### Change
Updated minijail to r188.

### Security
Fixed CVE-2026-43303 in the Linux kernel.

### Security
Fixed CVE-2026-43492 in the Linux kernel.

### Security
Fixed CVE-2026-43496 in the Linux kernel.

### Security
Fixed CVE-2026-43499 in the Linux kernel.

### Security
Fixed CVE-2026-43503 in the Linux kernel.

### Security
Fixed CVE-2026-45837 in the Linux kernel.

### Security
Fixed CVE-2026-45838 in the Linux kernel.

### Security
Fixed CVE-2026-45839 in the Linux kernel.

### Security
Fixed CVE-2026-45841 in the Linux kernel.

### Security
Fixed CVE-2026-45842 in the Linux kernel.

### Security
Fixed CVE-2026-45843 in the Linux kernel.

### Security
Fixed CVE-2026-45844 in the Linux kernel.

### Security
Fixed CVE-2026-45987 in the Linux kernel.

### Security
Fixed CVE-2026-45991 in the Linux kernel.

### Security
Fixed CVE-2026-45997 in the Linux kernel.

### Security
Fixed CVE-2026-46005 in the Linux kernel.

### Security
Fixed CVE-2026-46015 in the Linux kernel.

### Security
Fixed CVE-2026-46021 in the Linux kernel.

### Security
Fixed CVE-2026-46033 in the Linux kernel.

### Security
Fixed CVE-2026-46037 in the Linux kernel.

### Security
Fixed CVE-2026-46040 in the Linux kernel.

### Security
Fixed CVE-2026-46046 in the Linux kernel.

### Security
Fixed CVE-2026-46050 in the Linux kernel.

### Security
Fixed CVE-2026-46051 in the Linux kernel.

### Security
Fixed CVE-2026-46061 in the Linux kernel.

### Security
Fixed CVE-2026-46062 in the Linux kernel.

### Security
Fixed CVE-2026-46065 in the Linux kernel.

### Security
Fixed CVE-2026-46070 in the Linux kernel.

### Security
Fixed CVE-2026-46072 in the Linux kernel.

### Security
Fixed CVE-2026-46076 in the Linux kernel.

### Security
Fixed CVE-2026-46082 in the Linux kernel.

### Security
Fixed CVE-2026-46086 in the Linux kernel.

### Security
Fixed CVE-2026-46089 in the Linux kernel.

### Security
Fixed CVE-2026-46094 in the Linux kernel.

### Security
Fixed CVE-2026-46101 in the Linux kernel.

### Security
Fixed CVE-2026-46102 in the Linux kernel.

### Security
Fixed CVE-2026-46106 in the Linux kernel.

### Security
Fixed CVE-2026-46107 in the Linux kernel.

### Security
Fixed CVE-2026-46108 in the Linux kernel.

### Security
Fixed CVE-2026-46115 in the Linux kernel.

### Security
Fixed CVE-2026-46116 in the Linux kernel.

### Security
Fixed CVE-2026-46120 in the Linux kernel.

### Security
Fixed CVE-2026-46124 in the Linux kernel.

### Security
Fixed CVE-2026-46128 in the Linux kernel.

### Security
Fixed CVE-2026-46129 in the Linux kernel.

### Security
Fixed CVE-2026-46131 in the Linux kernel.

### Security
Fixed CVE-2026-46132 in the Linux kernel.

### Security
Fixed CVE-2026-46135 in the Linux kernel.

### Security
Fixed CVE-2026-46139 in the Linux kernel.

### Security
Fixed CVE-2026-46149 in the Linux kernel.

### Security
Fixed CVE-2026-46150 in the Linux kernel.

### Security
Fixed CVE-2026-46155 in the Linux kernel.

### Security
Fixed CVE-2026-46159 in the Linux kernel.

### Security
Fixed CVE-2026-46161 in the Linux kernel.

### Security
Fixed CVE-2026-46172 in the Linux kernel.

### Security
Fixed CVE-2026-46173 in the Linux kernel.

### Security
Fixed CVE-2026-46174 in the Linux kernel.

### Security
Fixed CVE-2026-46176 in the Linux kernel.

### Security
Fixed CVE-2026-46177 in the Linux kernel.

### Security
Fixed CVE-2026-46185 in the Linux kernel.

### Security
Fixed CVE-2026-46193 in the Linux kernel.

### Security
Fixed CVE-2026-46195 in the Linux kernel.

### Security
Fixed CVE-2026-46196 in the Linux kernel.

### Security
Fixed CVE-2026-46209 in the Linux kernel.

### Security
Fixed CVE-2026-46214 in the Linux kernel.

### Security
Fixed CVE-2026-46234 in the Linux kernel.

### Security
Fixed CVE-2026-46243 in the Linux kernel.

### Security
Fixed CVE-2026-46300 in the Linux kernel.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-129-19506-224-16
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.90
[See List](https://storage.googleapis.com/cos-tools/19506.224.16/lakitu/gpu_driver_versions.textproto)

### Change
Updated minijail to r188.

### Security
Fixed CVE-2026-43303 in the Linux kernel.

[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18867.381.162/lakitu/gpu_driver_versions.textproto)

### Gemini 3.5 Flash is generally available
[Gemini 3.5 Flash](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3) is now generally available to Gemini Code Assist users in VS Code and IntelliJ. You can use this model for [agent mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [chat](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), and [code generation](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini#generate_code_with_prompts).

### Gemini 3.5 Flash is generally available
[Gemini 3.5 Flash](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3) is now generally available to Gemini Code Assist users in VS Code and IntelliJ. You can use this model for [agent mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [chat](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), and [code generation](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini#generate_code_with_prompts).

Gemini Enterprise: Gemini 3.5 Flash feature management toggle is no longer available after June 16, 2026
Starting June 16, 2026, the Gemini 3.5 Flash feature management toggle is no longer available. This change applies to the Global, US, and EU multi-regions.
[June 05,
2026 release note](https://docs.cloud.google.com/gemini/enterprise/docs/release-notes#June_05_2026)

### Announcement
Google Cloud CCaaS 4.39
We've released version 4.39 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule that you have chosen. For more information, see [Deployment schedules](https://cloud.google.com/contact-center/ccai-platform/docs/deployment-schedules).

### Fixed
This release addresses the following issues:
- Fixed an issue with Salesforce where cases weren't created when a virtual
agent connected to a call.
- Fixed an issue where agents on teams with transfer restrictions couldn't
transfer chats to agents not assigned to a team.
- Fixed an issue where agents who weren't available for chat transfers still
appeared in the transfer list, causing transfer attempts to fail.
- Fixed an issue where the Submit wrap-up button didn't appear in the
call adapter after agents completed outbound calls.
- Fixed an issue where an agent and caller could still hear each other after
the agent placed the caller on hold.
- Fixed an issue in the agent desktop that occurred after an agent transferred
a call to a different queue. The agent desktop layout of the source queue
displayed to the receiving agent instead of the layout of the destination
queue.
- Fixed an issue where the reporting for After Call Work (ACW) time was
artificially high for calls transferred to a third party.
- Fixed an issue where overcapacity deflection settings interfered with
after-hours deflections, causing calls to be incorrectly queued.
- Fixed an issue where the inactivity timeout didn't function as configured.
Fixed an issue with Salesforce where cases weren't created when a virtual agent connected to a call.
Fixed an issue where agents on teams with transfer restrictions couldn't transfer chats to agents not assigned to a team.
Fixed an issue where agents who weren't available for chat transfers still appeared in the transfer list, causing transfer attempts to fail.
Fixed an issue where the Submit wrap-up button didn't appear in the call adapter after agents completed outbound calls.
Fixed an issue where an agent and caller could still hear each other after the agent placed the caller on hold.
Fixed an issue in the agent desktop that occurred after an agent transferred a call to a different queue. The agent desktop layout of the source queue displayed to the receiving agent instead of the layout of the destination queue.
Fixed an issue where the reporting for After Call Work (ACW) time was artificially high for calls transferred to a third party.
Fixed an issue where overcapacity deflection settings interfered with after-hours deflections, causing calls to be incorrectly queued.
Fixed an issue where the inactivity timeout didn't function as configured.

Several API dependencies that aren't required by Managed Airflow (Gen 3) are now phased out and must be enabled separately if you want to create Managed Airflow (Gen 2) environments in a new project. This change was [announced previously](https://docs.cloud.google.com/composer/docs/release-notes#June_16_2025).
The following API dependencies were phased out:
- artifactregistry.googleapis.com
- cloudbuild.googleapis.com
- container.googleapis.com
- pubsub.googleapis.com
The following API dependencies aren't phased out yet and are scheduled to be detached from the Cloud Composer API in the future:
- sqladmin.googleapis.com
Existing Managed Airflow (Gen 3) and Managed Airflow (Gen 2) environments in projects where the Cloud Composer API is already enabled aren't impacted.
You can do the following:
- If your project has only Managed Airflow (Gen 3) environments, then you can
manually disable the listed APIs that were phased out.
- If your project has Managed Airflow (Gen 2) environments, then we recommend
to keep these APIs enabled because disabling them might lead to environment's malfunction.
- If you want to create Managed Airflow (Gen 2) environments in a new project,
you can enable the listed APIs manually or using a Google Cloud CLI
command. For more information, see
[Enable Managed Airflow (Gen 2) dependencies](https://docs.cloud.google.com/composer/docs/composer-2/enable-composer-service#enable-gen-2-dependencies).
- If you use automation scripts to provision Managed Airflow (Gen 2)
environments, then make sure that the listed APIs are enabled in addition
to the Cloud Composer API.
[Enable Managed Airflow (Gen 2) dependencies](https://docs.cloud.google.com/composer/docs/composer-2/enable-composer-service#enable-gen-2-dependencies)

[Cloud Network Insights](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/) is in General Availability.
Cloud Network Insights monitors your network and web application performance across multicloud and hybrid networks and provides visualization tools to help identify and diagnose network issues.
The following additional features are included in this release:
- Compute Engine VM Monitoring Points: [deploy a Monitoring Point](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points#gce_vm) optimized for Google Cloud directly to your Google
Cloud infrastructure using Terraform.
- Connectivity Tests support: [run Connectivity Tests](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/run-connectivity-tests)
from Cloud Network Insights to validate connectivity
between endpoints of some dual-ended network paths.
Compute Engine VM Monitoring Points: [deploy a Monitoring Point](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points#gce_vm) optimized for Google Cloud directly to your Google Cloud infrastructure using Terraform.
Connectivity Tests support: [run Connectivity Tests](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/run-connectivity-tests) from Cloud Network Insights to validate connectivity between endpoints of some dual-ended network paths.

The OBJECT_TYPE/PERSON/SIGNATURE infoType detector is available in global and the asia, europe, and us multi-regions. For more information about all infoTypes, see [InfoType detector reference](https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference).

```
OBJECT_TYPE/PERSON/SIGNATURE
```


```
global
```


```
asia
```


```
europe
```


```
us
```

### Feature
Agent Search: Prefix and partial matching for filtering search queries (Preview)
You can configure schema fields to support prefix matching and partial matching in filter expressions:
- Prefix matching lets you filter search results based on whether a field value
starts with a specific string.
- Partial matching lets you filter results based on whether the query contains
some of the words in the field value. Partial matching doesn't require a
perfect match like the ANY operator does.
Prefix matching lets you filter search results based on whether a field value starts with a specific string.
Partial matching lets you filter results based on whether the query contains some of the words in the field value. Partial matching doesn't require a perfect match like the ANY operator does.

```
ANY
```

This feature is in Public Preview. For more information, see [Configure field settings](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings).

### Feature
Agent Search: EXISTS filter for filtering search queries (Preview)

```
EXISTS
```

You can use the EXISTS filter to filter search results for documents. Specifying EXISTS for a field means that a document can only be returned in a search request if the field has a value and that value is not the default. This filter is available for custom search and for media search. Use EXISTS with other filters such as ANY and IN to create expressions to scope the documents that can be returned in a search query.

```
EXISTS
```


```
EXISTS
```


```
EXISTS
```


```
ANY
```


```
IN
```

This feature is in Public Preview. For more information, see [Filter custom search for structured or unstructured data](https://docs.cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata), [Filter website search](https://docs.cloud.google.com/generative-ai-app-builder/docs/filter-website-search), and [Filter media search](https://docs.cloud.google.com/generative-ai-app-builder/docs/filter-media-search).

### Announcement
Release 6.3.88 is being rolled out to the first phase of regions as listed [here](https://docs.cloud.google.com/chronicle/docs/soar/overview-and-introduction/soar-gradual-release).
This release contains internal and customer bug fixes.

### Announcement
Cloud Location Finder is generally available ([GA](https://cloud.google.com/products#product-launch-stages)).

[Release 6.3.87](https://docs.cloud.google.com/chronicle/docs/soar/release-notes#May_31_2026) is now available for all regions.

### Feature
[General availability](https://cloud.google.com/products#product-launch-stages) support for the following integration:
- [Firebase Phone Number Verification](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products#table_firebase_phone_number_verification)
[Firebase Phone Number Verification](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products#table_firebase_phone_number_verification)

### Feature
Cloud Data Fusion version 6.11.1.3 is generally available ([GA](https://cloud.google.com/products#product-launch-stages)).

### Fixed
Fixed in Cloud Data Fusion 6.11.1.3:
- Fixed an issue that caused pipeline preview runs to fail with an
InaccessibleObjectException when using certain plugins, such as
Cloud SQL for PostgreSQL
([CDAP-21212](https://cdap.atlassian.net/browse/CDAP-21212)).
- Fixed an issue causing custom plugins to lose their logging context when
running in parallel pipeline branches, ensuring consistent log propagation
across both linear and parallel branched pipeline executions
([CDAP-21245](https://cdap.atlassian.net/browse/CDAP-21245)).
- Fixed critical security vulnerabilities in CDAP
([CDAP-21250](https://cdap.atlassian.net/browse/CDAP-21250)).
- Improved the latency of the List pipelines page
([CDAP-21244](https://cdap.atlassian.net/browse/CDAP-21244)).
- Fixed an issue causing intermittent service unavailability after instance
upgrades ([CDAP-21254](https://cdap.atlassian.net/browse/CDAP-21254)).
Fixed an issue that caused pipeline preview runs to fail with an InaccessibleObjectException when using certain plugins, such as Cloud SQL for PostgreSQL ([CDAP-21212](https://cdap.atlassian.net/browse/CDAP-21212)).

```
InaccessibleObjectException
```

Fixed an issue causing custom plugins to lose their logging context when running in parallel pipeline branches, ensuring consistent log propagation across both linear and parallel branched pipeline executions ([CDAP-21245](https://cdap.atlassian.net/browse/CDAP-21245)).
Fixed critical security vulnerabilities in CDAP ([CDAP-21250](https://cdap.atlassian.net/browse/CDAP-21250)).
Improved the latency of the List pipelines page ([CDAP-21244](https://cdap.atlassian.net/browse/CDAP-21244)).
Fixed an issue causing intermittent service unavailability after instance upgrades ([CDAP-21254](https://cdap.atlassian.net/browse/CDAP-21254)).

### Change
Changes in Cloud Data Fusion 6.11.1.3:
- Introduced a deployStrategy query parameter in the
[Deploy Application API](https://cdap.atlassian.net/wiki/spaces/DOCS/pages/477560983/Lifecycle+Microservices#Create-an-Application)
to skip the re-deployment of an existing pipeline if its configuration hasn't
changed
([CDAP-21246](https://cdap.atlassian.net/browse/CDAP-21246)).

```
deployStrategy
```

[Deploy Application API](https://cdap.atlassian.net/wiki/spaces/DOCS/pages/477560983/Lifecycle+Microservices#Create-an-Application)
[CDAP-21246](https://cdap.atlassian.net/browse/CDAP-21246)

Custom dashboards can display trace data. You can view individual spans or aggregated data. This feature is [public preview](https://docs.cloud.google.com/products#product-launch-stages). For more information, see the following:
- [Display trace data (Google Cloud console)](https://docs.cloud.google.com/monitoring/dashboards/display-traces-on-dashboards)
- [Dashboard with trace data (API)](https://docs.cloud.google.com/monitoring/dashboards/api-examples#dashboard-with-trace-data)
[Display trace data (Google Cloud console)](https://docs.cloud.google.com/monitoring/dashboards/display-traces-on-dashboards)
[Dashboard with trace data (API)](https://docs.cloud.google.com/monitoring/dashboards/api-examples#dashboard-with-trace-data)

Custom dashboards can display trace data. You can view individual spans or aggregated data. This feature is [public preview](https://docs.cloud.google.com/products#product-launch-stages). For more information, see [Display traces on a custom dashboard](https://docs.cloud.google.com/trace/docs/display-traces-on-dashboards).

### Feature
Gemini Enterprise: Asana data store (Preview)
The Asana data store is available in Public Preview in Gemini Enterprise.
You can connect an Asana account to search and read projects, workspaces, teams, and tasks using natural language. You can also perform actions, such as creating projects and tasks, directly from the Gemini Enterprise app.
For more information, see [Connect Asana](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/asana).

### Announcement
Gemini Enterprise: Administrator control for Gemini 3.5 Flash
As a reminder, effective June 9, 2026, the feature management toggle for Gemini 3.5 Flash is no longer available. Gemini 3.5 Flash is enabled by default for all users in the Gemini Enterprise app and cannot be disabled.
This change applies to the Global, US, and EU multi-regions.
[originally
announced schedule](https://docs.cloud.google.com/gemini/enterprise/docs/release-notes#May_26_2026)

### Announcement
Google Distributed Cloud (software only) for bare metal 1.33.900-gke.90 is now available for download. To upgrade, see [Upgrade clusters](https://cloud.google.com/feeds/how-to/upgrade). Google Distributed Cloud for bare metal 1.33.900-gke.90 runs on Kubernetes v1.33.11-gke.100.
After a release, it takes approximately 7 to 14 days for the version to become available for installations or upgrades with the GKE On-Prem API clients: the Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready storage partners document to make sure the storage vendor has already passed the qualification for this release of Google Distributed Cloud for bare metal.

### Fixed
The following issues were fixed in 1.33.900-gke.90:
- Fixed vulnerabilities listed in [Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities).
- Fixed an issue where a transient or partial failure during node pool updates
could cause node taints or labels to become permanently stuck (stranded) on
worker nodes, even after you removed them from the NodePool custom resource
specification.

- Fixed an issue where, if a new control plane node failed to join a cluster
during bootstrapping or scaling (associated with installer Ansible runner job
failures), orphaned etcd memberships were not cleaned up, causing the existing
control plane's API server to restart repeatedly (flap) and blocking subsequent
retry attempts. 
- Fixed an issue where, during control plane certificate rotation or etcd
encryption updates, the installer stalled for three minutes per control plane
node while waiting for the local API server to restart, causing nodes to
temporarily report an Unknown status and triggering transient routing
disruptions (such as 503 Service Unavailable or ImagePullBackOff errors) for
workloads scheduled on those nodes.

- Fixed an issue where, when enabling or updating etcd encryption, the API
server was terminated abruptly, causing transient connection timeouts or
failures for in-cluster workloads for up to five minutes.

- Fixed an issue where, when recreating a user cluster with a previously used
name (which commonly occurs during Terraform deployments or manual
reinstalls), cluster provisioning stalled indefinitely in the provisioning
state due to a missing k8s-health-check service account. The installer
ensures that the service account is created, eliminating the need to manually
create the service account as a workaround.
[Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities)

Starting June 1, 2026, the Data Catalog service begins a phased shutdown. From this date onward, you might experience disruptions or a complete lack of access to Data Catalog APIs. Knowledge Catalog (formerly known as Dataplex Catalog) operates without impact.
For more information about migrating from Data Catalog to Knowledge Catalog, see [Transition from Data Catalog to Knowledge Catalog](https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog).

### Feature
[AI Protection](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview) supports data residency in the European Union (EU) for the Security Command Center Premium tier.
For more information, see [Planning for data residency](https://docs.cloud.google.com/security-command-center/docs/data-residency-support).

### Change
The following Security Command Center finding category names from AI Protection have new names that clarify that AI Protection detects Gemini foundation models:
- VERTEX_AI_MODEL_DETECTED changes to GEMINI_MODEL_DETECTED.
- VERTEX_AI_MODEL_NOT_PROTECTED_BY_MODEL_ARMOR changes to
GEMINI_MODEL_NOT_PROTECTED_BY_MODEL_ARMOR.

```
VERTEX_AI_MODEL_DETECTED
```


```
GEMINI_MODEL_DETECTED
```


```
VERTEX_AI_MODEL_NOT_PROTECTED_BY_MODEL_ARMOR
```


```
GEMINI_MODEL_NOT_PROTECTED_BY_MODEL_ARMOR
```

For more information about AI Protection findings, see [AI Protection overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview).

### Change
Addressed multiple Common Vulnerabilities and Exposures (CVEs) by updating dependencies.

To view the instrumentation scope or the schema associated with a span, open the Details view for the span and select the Metadata & Links tab. For more information, see [View attributes, log entries, and events](https://docs.cloud.google.com/trace/docs/finding-traces#attributes-events).

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-121-18867-381-161
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18867.381.161/lakitu/gpu_driver_versions.textproto)

### Change
Updated minijail to r188.

### Security
Fixed CVE-2026-43303 in the Linux kernel.

### Security
Fixed CVE-2026-43499 in the Linux kernel.

### Security
Fixed CVE-2026-43503 in the Linux kernel.

### Security
Fixed CVE-2026-45838 in the Linux kernel.

### Security
Fixed CVE-2026-45839 in the Linux kernel.

### Security
Fixed CVE-2026-45841 in the Linux kernel.

### Security
Fixed CVE-2026-45842 in the Linux kernel.

### Security
Fixed CVE-2026-45843 in the Linux kernel.

### Security
Fixed CVE-2026-45844 in the Linux kernel.

### Security
Fixed CVE-2026-45987 in the Linux kernel.

### Security
Fixed CVE-2026-45991 in the Linux kernel.

### Security
Fixed CVE-2026-45997 in the Linux kernel.

### Security
Fixed CVE-2026-46005 in the Linux kernel.

### Security
Fixed CVE-2026-46015 in the Linux kernel.

### Security
Fixed CVE-2026-46021 in the Linux kernel.

### Security
Fixed CVE-2026-46033 in the Linux kernel.

### Security
Fixed CVE-2026-46037 in the Linux kernel.

### Security
Fixed CVE-2026-46040 in the Linux kernel.

### Security
Fixed CVE-2026-46046 in the Linux kernel.

### Security
Fixed CVE-2026-46050 in the Linux kernel.

### Security
Fixed CVE-2026-46051 in the Linux kernel.

### Security
Fixed CVE-2026-46065 in the Linux kernel.

### Security
Fixed CVE-2026-46070 in the Linux kernel.

### Security
Fixed CVE-2026-46082 in the Linux kernel.

### Security
Fixed CVE-2026-46086 in the Linux kernel.

### Security
Fixed CVE-2026-46089 in the Linux kernel.

### Security
Fixed CVE-2026-46094 in the Linux kernel.

### Security
Fixed CVE-2026-46101 in the Linux kernel.

### Security
Fixed CVE-2026-46102 in the Linux kernel.

### Security
Fixed CVE-2026-46106 in the Linux kernel.

### Security
Fixed CVE-2026-46107 in the Linux kernel.

### Security
Fixed CVE-2026-46115 in the Linux kernel.

### Security
Fixed CVE-2026-46116 in the Linux kernel.

### Security
Fixed CVE-2026-46120 in the Linux kernel.

### Security
Fixed CVE-2026-46124 in the Linux kernel.

### Security
Fixed CVE-2026-46131 in the Linux kernel.

### Security
Fixed CVE-2026-46132 in the Linux kernel.

### Security
Fixed CVE-2026-46149 in the Linux kernel.

### Security
Fixed CVE-2026-46150 in the Linux kernel.

### Security
Fixed CVE-2026-46155 in the Linux kernel.

### Security
Fixed CVE-2026-46161 in the Linux kernel.

### Security
Fixed CVE-2026-46172 in the Linux kernel.

### Security
Fixed CVE-2026-46173 in the Linux kernel.

### Security
Fixed CVE-2026-46174 in the Linux kernel.

### Security
Fixed CVE-2026-46176 in the Linux kernel.

### Security
Fixed CVE-2026-46185 in the Linux kernel.

### Security
Fixed CVE-2026-46195 in the Linux kernel.

### Security
Fixed CVE-2026-46196 in the Linux kernel.

### Security
Fixed CVE-2026-46209 in the Linux kernel.

### Security
Fixed CVE-2026-46214 in the Linux kernel.

### Security
Fixed CVE-2026-46234 in the Linux kernel.

### Security
Fixed CVE-2026-46300 in the Linux kernel.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-117-18613-613-40
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18613.613.40/lakitu/gpu_driver_versions.textproto)

### Change
Updated minijail to r188.

### Security
Fixed CVE-2026-43303 in the Linux kernel.

### Security
Fixed CVE-2026-43499 in the Linux kernel.

### Security
Fixed CVE-2026-45838 in the Linux kernel.

### Security
Fixed CVE-2026-45839 in the Linux kernel.

### Security
Fixed CVE-2026-45841 in the Linux kernel.

### Security
Fixed CVE-2026-45842 in the Linux kernel.

### Security
Fixed CVE-2026-45843 in the Linux kernel.

### Security
Fixed CVE-2026-45844 in the Linux kernel.

### Security
Fixed CVE-2026-45987 in the Linux kernel.

### Security
Fixed CVE-2026-45991 in the Linux kernel.

### Security
Fixed CVE-2026-45997 in the Linux kernel.

### Security
Fixed CVE-2026-46005 in the Linux kernel.

### Security
Fixed CVE-2026-46015 in the Linux kernel.

### Security
Fixed CVE-2026-46021 in the Linux kernel.

### Security
Fixed CVE-2026-46033 in the Linux kernel.

### Security
Fixed CVE-2026-46037 in the Linux kernel.

### Security
Fixed CVE-2026-46040 in the Linux kernel.

### Security
Fixed CVE-2026-46046 in the Linux kernel.

### Security
Fixed CVE-2026-46050 in the Linux kernel.

### Security
Fixed CVE-2026-46051 in the Linux kernel.

### Security
Fixed CVE-2026-46065 in the Linux kernel.

### Security
Fixed CVE-2026-46070 in the Linux kernel.

### Security
Fixed CVE-2026-46082 in the Linux kernel.

### Security
Fixed CVE-2026-46086 in the Linux kernel.

### Security
Fixed CVE-2026-46089 in the Linux kernel.

### Security
Fixed CVE-2026-46094 in the Linux kernel.

### Security
Fixed CVE-2026-46101 in the Linux kernel.

### Security
Fixed CVE-2026-46102 in the Linux kernel.

### Security
Fixed CVE-2026-46106 in the Linux kernel.

### Security
Fixed CVE-2026-46107 in the Linux kernel.

### Security
Fixed CVE-2026-46115 in the Linux kernel.

### Security
Fixed CVE-2026-46116 in the Linux kernel.

### Security
Fixed CVE-2026-46120 in the Linux kernel.

### Security
Fixed CVE-2026-46124 in the Linux kernel.

### Security
Fixed CVE-2026-46131 in the Linux kernel.

### Security
Fixed CVE-2026-46132 in the Linux kernel.

### Security
Fixed CVE-2026-46149 in the Linux kernel.

### Security
Fixed CVE-2026-46150 in the Linux kernel.

### Security
Fixed CVE-2026-46155 in the Linux kernel.

### Security
Fixed CVE-2026-46161 in the Linux kernel.

### Security
Fixed CVE-2026-46172 in the Linux kernel.

### Security
Fixed CVE-2026-46173 in the Linux kernel.

### Security
Fixed CVE-2026-46174 in the Linux kernel.

### Security
Fixed CVE-2026-46176 in the Linux kernel.

### Security
Fixed CVE-2026-46185 in the Linux kernel.

### Security
Fixed CVE-2026-46195 in the Linux kernel.

### Security
Fixed CVE-2026-46196 in the Linux kernel.

### Security
Fixed CVE-2026-46209 in the Linux kernel.

### Security
Fixed CVE-2026-46214 in the Linux kernel.

### Security
Fixed CVE-2026-46234 in the Linux kernel.

### Security
Fixed CVE-2026-46300 in the Linux kernel.

Custom extractor offers document validation and correction in [Preview](https://cloud.google.com/products/#product-launch-stages).
This feature allows you to enhance extraction accuracy with validation rules and document data using Common Expression Language (CEL) dialect.
For more information, see [CEL dialect for document validation](https://docs.cloud.google.com/document-ai/docs/ce-common-expression-validation.md).

#### (2026-R22) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for manual control plane upgrades and node upgrades for existing clusters. For more information about versioning and upgrades, see [GKE versioning and support](https://cloud.google.com/kubernetes-engine/versioning) and [About GKE cluster upgrades](https://cloud.google.com/kubernetes-engine/upgrades).

- Version [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360) is now the default version for cluster creation in the Rapid channel.
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Rapid channel:

1.33.12-gke.1000000
1.34.8-gke.1000000
1.35.5-gke.1000000
1.36.0-gke.2253000

- 1.33.12-gke.1000000
- 1.34.8-gke.1000000
- 1.35.5-gke.1000000
- 1.36.0-gke.2253000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1059000
1.34 to 1.34.8-gke.1126000
1.35 to 1.35.5-gke.1057000
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)

1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.12-gke.1000000
- 1.34.8-gke.1000000
- 1.35.5-gke.1000000
- 1.36.0-gke.2253000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)

- 1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- Version [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Regular channel.
- The following versions are now available in the Regular channel:

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available in the Regular channel:

1.33.11-gke.1074000
1.34.7-gke.1055000
1.35.3-gke.1389002

- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1197000
1.34 to 1.34.7-gke.1499000
1.35 to 1.35.3-gke.2190000


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- Version [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347) is now the default version for cluster creation in the Stable channel.
- The following versions are no longer available in the Stable channel:

1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1307000

- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1307000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1074000
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1307000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- Version [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Extended channel.
- The following versions are now available in the Extended channel:

[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available in the Extended channel:

1.30.14-gke.2441000 is [[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2558000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1850000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1967000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1449000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1592000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.11-gke.1074000
1.34.7-gke.1055000
1.35.3-gke.1389002

- 1.30.14-gke.2441000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2558000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1850000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.31.14-gke.1967000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1449000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1592000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [[1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.30 to 1.30.14-gke.2458000
1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.30.14-gke.2441000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2558000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1850000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1967000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1449000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1592000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- Version [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation.
- The following versions are now available:

[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following node versions are now available:

[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available:

1.33.11-gke.1013000 is [[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1154000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1389000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1993000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1993000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1074000
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1993000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

#### (2026-R22) Security updates
This release includes new GKE versions that use updated Container-Optimized OS images. These updated images are cumulative, incorporating security fixes from all Container-Optimized OS versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated Container-Optimized OS image, see the Security release notes for that image. The following table includes links to the release notes for each updated Container-Optimized OS image:
GKE version Container-Optimized OS version Details 1.34.8-gke.1218000 cos-125-19216-395-7 [cos-125-19216-395-7 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m125#cos-125-19216-395-7_) 1.36.0-gke.2684000 cos-129-19506-120-64 [cos-129-19506-120-64 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m129#cos-129-19506-120-64_)

#### (2026-R22) Version updates
- Version [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347) is now the default version for cluster creation in the Stable channel.
- The following versions are no longer available in the Stable channel:

1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1307000

- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1307000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1074000
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1307000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

#### (2026-R22) Version updates
- Version [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Regular channel.
- The following versions are now available in the Regular channel:

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available in the Regular channel:

1.33.11-gke.1074000
1.34.7-gke.1055000
1.35.3-gke.1389002

- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1197000
1.34 to 1.34.7-gke.1499000
1.35 to 1.35.3-gke.2190000


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

#### (2026-R22) Version updates
- Version [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360) is now the default version for cluster creation in the Rapid channel.
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Rapid channel:

1.33.12-gke.1000000
1.34.8-gke.1000000
1.35.5-gke.1000000
1.36.0-gke.2253000

- 1.33.12-gke.1000000
- 1.34.8-gke.1000000
- 1.35.5-gke.1000000
- 1.36.0-gke.2253000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1059000
1.34 to 1.34.8-gke.1126000
1.35 to 1.35.5-gke.1057000
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)

1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2684000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.12-gke.1000000
- 1.34.8-gke.1000000
- 1.35.5-gke.1000000
- 1.36.0-gke.2253000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)

- 1.33 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

#### (2026-R22) Version updates
- Version [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation.
- The following versions are now available:

[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following node versions are now available:

[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available:

1.33.11-gke.1013000 is [[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1154000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1389000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1993000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1993000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1074000
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1116000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1218000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1163000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

### Change
- 1.33.11-gke.1013000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1993000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

### Feature
GKE Gateway now supports frontend mTLS (client certificate validation). Frontend mTLS allows the Gateway to authenticate client-presented certificates. This feature is available for the following GatewayClasses:
- gke-l7-global-external-managed
- gke-l7-regional-external-managed
- gke-l7-rilb

```
gke-l7-global-external-managed
```


```
gke-l7-regional-external-managed
```


```
gke-l7-rilb
```

For more information, see [Configure frontend mTLS for a Gateway](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/secure-gateway#configure-frontend-mtls).

#### (2026-R22) Version updates
- Version [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Extended channel.
- The following versions are now available in the Extended channel:

[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available in the Extended channel:

1.30.14-gke.2441000 is [[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2558000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1850000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1967000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1449000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1592000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.11-gke.1074000
1.34.7-gke.1055000
1.35.3-gke.1389002

- 1.30.14-gke.2441000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2558000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1850000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.31.14-gke.1967000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1449000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1592000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [[1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.30 to 1.30.14-gke.2458000
1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2608000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1986000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1657000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.30.14-gke.2441000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2558000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1850000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1967000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1449000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1592000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1074000
- 1.34.7-gke.1055000
- 1.35.3-gke.1389002
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.29 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.30 to [1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2458000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1868000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1492000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

You can use the [lookupContext](https://docs.cloud.google.com/dataplex/docs/reference/rest/v1/projects.locations/lookupContext) method to retrieve a pre-formatted bundle of data asset context optimized for interactive agentic workflows. This LLM-ready context helps to ground your agents in assessing and using data assets.

```
lookupContext
```

This feature is available in [preview](https://cloud.google.com/products#product-launch-stages).
For more information, see [Retrieve context for data assets](https://docs.cloud.google.com/dataplex/docs/retrieve-data-context).

### Announcement
Looker 26.10 is expected to include the following changes, features, and fixes:
- Expected Looker (original) deployment start: Sunday, June 7, 2026
- Expected Looker (original) final deployment and download available: Sunday, June 21, 2026
- Expected Looker (Google Cloud core) deployment start: Sunday, June 7, 2026
- Expected Looker (Google Cloud core) final deployment: Sunday, June 21, 2026

### Fixed
An issue has been fixed where clicking Save and Schedule on an Explore could fail to load the Schedule dialog in a Looker (Google Cloud core) instance. This feature now performs as expected.

### Fixed
An issue has been fixed where cross filters didn't properly appear in the right-aligned filter bar. This feature now performs as expected.

### Fixed
An issue has been fixed where attempting to download or schedule the Recent Login Failures tile on the User Activity System Activity dashboard could fail. This feature now performs as expected.

### Fixed
An issue has been fixed where users were unable to scroll dashboards when the filter bar was open. This feature now performs as expected.

### Fixed
An issue has been fixed where dragging a dashboard tile horizontally could cause the tile to expand beyond the browser window. This feature now performs as expected.

### Fixed
An issue has been fixed for filters on [custom calendar](https://docs.cloud.google.com/looker/docs/custom-calendars) fields that was causing a SQL error when the custom calendar dimension_group or the custom calendar reference_date had a non-timestamp datatype specified. This feature now performs as expected.

```
dimension_group
```


```
reference_date
```


```
datatype
```

### Fixed
An issue has been fixed where configuring remote dependencies with custom SSH ports for on-premise Git repositories could fail. This feature now performs as expected.

### Fixed
An issue has been fixed where applying string matching filters (such as Contains or Starts With) with an empty value could generate incorrect filter SQL. This feature now performs as expected.

```
Contains
```


```
Starts With
```

### Fixed
An issue has been fixed where the labels that were specified in the PDT Override Additional JDBC Parameters field weren't being applied to BigQuery table creation jobs. This feature now performs as expected.

### Fixed
An issue has been fixed where changes to Markdown files weren't saved when you switched between Edit and Preview mode. This feature now performs as expected.

### Fixed
An issue has been fixed where running queries against derived tables in SQL Runner could cause Looker to return a 500 error. This feature now performs as expected.

### Fixed
An issue has been fixed where the right-aligned filter bar could become wide enough to require a scroll bar if a range slider filter was added. This feature now performs as expected.

### Fixed
An issue has been fixed where right-clicking in a drill-down menu during a cookieless embed session could incorrectly close the menu. This feature now performs as expected.

### Fixed
An issue has been fixed where retrieving all schemas for a Denodo connection could overload the database CPU. This feature now performs as expected.

### Fixed
An issue has been fixed where the Unsubscribe link could fail to appear in a scheduled report email. This feature now performs as expected.

### Fixed
An issue has been fixed where the Advanced Vis Config editor would not recognize the plotOptions.column.borderRadius option. This feature now performs as expected.

```
plotOptions.column.borderRadius
```

### Fixed
An issue has been fixed where dashboard filters could fail to be updated from inactive to active color highlighting when certain types of date inputs were present. This feature now performs as expected.

### Fixed
An issue has been fixed where visualizations could overflow instead of shrinking when a tile or browser was resized. This feature now performs as expected.

### Fixed
When you edit a visualization, the Advanced Vis Config editor can now override default theme border and padding styles. This feature now performs as expected.

### Fixed
An issue has been fixed where a join wouldn't be added to a query if the join was required by a measure that was excluded from an Explore. This feature now performs as expected.

### Fixed
An issue has been fixed where period-over-period (POP) measures of types previous and difference that were based on count and sum measures would incorrectly return null instead of zero when no data was available for the comparison period. This feature now performs as expected.

```
previous
```


```
difference
```


```
count
```


```
sum
```

### Fixed
An issue has been fixed where filter suggestions on dashboard filters could incorrectly retain previous filter values. This feature now performs as expected.

### Fixed
An issue has been fixed where setting a field name or an Explore name in a LookML dashboard as a non-string datatype could cause the LookML validator to return a 500 error. This feature now performs as expected.

### Fixed
An issue has been fixed where the button group dashboard filter type could display more than 30 options, cluttering the UI. This feature now performs as expected.

```
button group
```

### Fixed
An issue has been fixed where moving a filter by dragging it could also inadvertently highlight text. This feature now performs as expected.

### Fixed
An issue has been fixed where some PDT settings were unavailable when you created a BigQuery connection by using the Quickstart flow in a Looker (Google Cloud core) instance. This feature now performs as expected.

### Feature
[Period-over-period (PoP) measures](https://docs.cloud.google.com/looker/docs/period-over-period) are now supported on connections to Trino databases.

Memorystore for Valkey has additional [node-level metrics](https://docs.cloud.google.com/memorystore/docs/valkey/supported-monitoring-metrics#cloud-monitoring-node-metrics) for Cloud Monitoring. These metrics offer detailed insights into the health and performance of individual nodes within an instance. You can use the metrics to troubleshoot issues with the nodes to optimize their performance. The metrics are available in [Preview](https://docs.cloud.google.com/products#product-launch-stages).

Google Cloud's Agent for SAP version 3.15
Version 3.15 of Google Cloud's Agent for SAP is generally available (GA). This version updates the libraries in the agent's [GitHub repository](https://github.com/GoogleCloudPlatform/sapagent) to address vulnerabilities when you're building the agent from its GitHub source.
For more information, see [What's new with Google Cloud's Agent for SAP](https://docs.cloud.google.com/sap/docs/agent-for-sap/whats-new).

### Change
reCAPTCHA Mobile SDK v18.9.1 is available for iOS. This version fixes symbol collisions with libraries using Objective-C protos.

### Feature
App Engine supports [Direct VPC egress](https://docs.cloud.google.com/appengine/docs/standard/vpc-direct-vpc) in [Preview](https://cloud.google.com/products#product-launch-stages). Direct VPC egress lets your workloads access VPC network resources as a simpler, more cost-effective [alternative to Serverless VPC Access connectors](https://docs.cloud.google.com/appengine/docs/standard/compare-direct-vpc-egress-connectors).

App Engine supports [Direct VPC egress](https://docs.cloud.google.com/appengine/docs/standard/vpc-direct-vpc) in [Preview](https://cloud.google.com/products#product-launch-stages). Direct VPC egress lets your workloads access VPC network resources as a simpler, more cost-effective [alternative to Serverless VPC Access connectors](https://docs.cloud.google.com/appengine/docs/standard/compare-direct-vpc-egress-connectors).

App Engine supports [Direct VPC egress](https://docs.cloud.google.com/appengine/docs/standard/vpc-direct-vpc) in [Preview](https://cloud.google.com/products#product-launch-stages). Direct VPC egress lets your workloads access VPC network resources as a simpler, more cost-effective [alternative to Serverless VPC Access connectors](https://docs.cloud.google.com/appengine/docs/standard/compare-direct-vpc-egress-connectors).

App Engine supports [Direct VPC egress](https://docs.cloud.google.com/appengine/docs/standard/vpc-direct-vpc) in [Preview](https://cloud.google.com/products#product-launch-stages). Direct VPC egress lets your workloads access VPC network resources as a simpler, more cost-effective [alternative to Serverless VPC Access connectors](https://docs.cloud.google.com/appengine/docs/standard/compare-direct-vpc-egress-connectors).

App Engine supports [Direct VPC egress](https://docs.cloud.google.com/appengine/docs/standard/vpc-direct-vpc) in [Preview](https://cloud.google.com/products#product-launch-stages). Direct VPC egress lets your workloads access VPC network resources as a simpler, more cost-effective [alternative to Serverless VPC Access connectors](https://docs.cloud.google.com/appengine/docs/standard/compare-direct-vpc-egress-connectors).

App Engine supports [Direct VPC egress](https://docs.cloud.google.com/appengine/docs/standard/vpc-direct-vpc) in [Preview](https://cloud.google.com/products#product-launch-stages). Direct VPC egress lets your workloads access VPC network resources as a simpler, more cost-effective [alternative to Serverless VPC Access connectors](https://docs.cloud.google.com/appengine/docs/standard/compare-direct-vpc-egress-connectors).

[BigQuery fluid scaling](https://docs.cloud.google.com/bigquery/docs/slots#slot-autoscaling), which provides per-second billing with no minimum duration for autoscaling reservations, is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

### Announcement
1.28.7-asm.3 is now available for in-cluster Cloud Service Mesh.
For details on upgrading Cloud Service Mesh, see [Upgrade Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs/upgrade/upgrade). Cloud Service Mesh 1.28.7-asm.3 uses Envoy v1.36.7-dev.

### Fixed
Patch 1.28.7-asm.3 contains fixes for the following platform CVEs:
[CVE-2026-27143](https://ubuntu.com/security/CVE-2026-27143)
[CVE-2026-31789](https://ubuntu.com/security/CVE-2026-31789)
[CVE-2026-27140](https://ubuntu.com/security/CVE-2026-27140)
[CVE-2026-28387](https://ubuntu.com/security/CVE-2026-28387)
[CVE-2026-41413](https://ubuntu.com/security/CVE-2026-41413)
[CVE-2026-2219](https://ubuntu.com/security/CVE-2026-2219)
[CVE-2026-27135](https://ubuntu.com/security/CVE-2026-27135)
[CVE-2026-28388](https://ubuntu.com/security/CVE-2026-28388)
[CVE-2026-28389](https://ubuntu.com/security/CVE-2026-28389)
[CVE-2026-28390](https://ubuntu.com/security/CVE-2026-28390)
[CVE-2026-29181](https://ubuntu.com/security/CVE-2026-29181)
[CVE-2026-31790](https://ubuntu.com/security/CVE-2026-31790)
[CVE-2026-32280](https://ubuntu.com/security/CVE-2026-32280)
[CVE-2026-32281](https://ubuntu.com/security/CVE-2026-32281)
[CVE-2026-32283](https://ubuntu.com/security/CVE-2026-32283)
[CVE-2026-33811](https://ubuntu.com/security/CVE-2026-33811)
[CVE-2026-33814](https://ubuntu.com/security/CVE-2026-33814)
[CVE-2026-34986](https://ubuntu.com/security/CVE-2026-34986)
[CVE-2026-39820](https://ubuntu.com/security/CVE-2026-39820)
[CVE-2026-39836](https://ubuntu.com/security/CVE-2026-39836)
[CVE-2026-4046](https://ubuntu.com/security/CVE-2026-4046)
[CVE-2026-42499](https://ubuntu.com/security/CVE-2026-42499)
[CVE-2026-42501](https://ubuntu.com/security/CVE-2026-42501)
[CVE-2026-4437](https://ubuntu.com/security/CVE-2026-4437)
[CVE-2026-5773](https://ubuntu.com/security/CVE-2026-5773)
[CVE-2026-6276](https://ubuntu.com/security/CVE-2026-6276)
[CVE-2026-27144](https://ubuntu.com/security/CVE-2026-27144)
[CVE-2026-39883](https://ubuntu.com/security/CVE-2026-39883)
[CVE-2026-4878](https://ubuntu.com/security/CVE-2026-4878)
[CVE-2026-5545](https://ubuntu.com/security/CVE-2026-5545)
[CVE-2026-32282](https://ubuntu.com/security/CVE-2026-32282)
[CVE-2026-32289](https://ubuntu.com/security/CVE-2026-32289)
[CVE-2026-39823](https://ubuntu.com/security/CVE-2026-39823)
[CVE-2026-39826](https://ubuntu.com/security/CVE-2026-39826)
[CVE-2026-39817](https://ubuntu.com/security/CVE-2026-39817)
[CVE-2026-4873](https://ubuntu.com/security/CVE-2026-4873)
[CVE-2026-6253](https://ubuntu.com/security/CVE-2026-6253)
[CVE-2026-32288](https://ubuntu.com/security/CVE-2026-32288)
[CVE-2026-39350](https://ubuntu.com/security/CVE-2026-39350)
[CVE-2026-4438](https://ubuntu.com/security/CVE-2026-4438)
[CVE-2026-39819](https://ubuntu.com/security/CVE-2026-39819)
[CVE-2026-39825](https://ubuntu.com/security/CVE-2026-39825)
[CVE-2026-6429](https://ubuntu.com/security/CVE-2026-6429)
[CVE-2026-7168](https://ubuntu.com/security/CVE-2026-7168)
[CVE-2026-35469](https://ubuntu.com/security/CVE-2026-35469)
[CVE-2026-5958](https://ubuntu.com/security/CVE-2026-5958)

### Announcement
1.27.9-asm.4 is now available for in-cluster Cloud Service Mesh.
For details on upgrading Cloud Service Mesh, see [Upgrade Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs/upgrade/upgrade). Cloud Service Mesh 1.27.9-asm.4 uses Envoy v1.35.10-dev.

### Fixed
Patch 1.27.9-asm.4 contains fixes for the following platform CVEs:
[CVE-2022-31045](https://ubuntu.com/security/CVE-2022-31045)
[CVE-2026-27143](https://ubuntu.com/security/CVE-2026-27143)
[CVE-2026-31789](https://ubuntu.com/security/CVE-2026-31789)
[CVE-2026-27140](https://ubuntu.com/security/CVE-2026-27140)
[CVE-2026-28387](https://ubuntu.com/security/CVE-2026-28387)
[CVE-2026-41413](https://ubuntu.com/security/CVE-2026-41413)
[CVE-2019-14993](https://ubuntu.com/security/CVE-2019-14993)
[CVE-2021-39155](https://ubuntu.com/security/CVE-2021-39155)
[CVE-2021-39156](https://ubuntu.com/security/CVE-2021-39156)
[CVE-2022-23635](https://ubuntu.com/security/CVE-2022-23635)
[CVE-2026-2219](https://ubuntu.com/security/CVE-2026-2219)
[CVE-2026-27135](https://ubuntu.com/security/CVE-2026-27135)
[CVE-2026-28388](https://ubuntu.com/security/CVE-2026-28388)
[CVE-2026-28389](https://ubuntu.com/security/CVE-2026-28389)
[CVE-2026-28390](https://ubuntu.com/security/CVE-2026-28390)
[CVE-2026-29181](https://ubuntu.com/security/CVE-2026-29181)
[CVE-2026-31790](https://ubuntu.com/security/CVE-2026-31790)
[CVE-2026-32280](https://ubuntu.com/security/CVE-2026-32280)
[CVE-2026-32281](https://ubuntu.com/security/CVE-2026-32281)
[CVE-2026-32283](https://ubuntu.com/security/CVE-2026-32283)
[CVE-2026-33811](https://ubuntu.com/security/CVE-2026-33811)
[CVE-2026-33814](https://ubuntu.com/security/CVE-2026-33814)
[CVE-2026-34986](https://ubuntu.com/security/CVE-2026-34986)
[CVE-2026-39820](https://ubuntu.com/security/CVE-2026-39820)
[CVE-2026-39836](https://ubuntu.com/security/CVE-2026-39836)
[CVE-2026-4046](https://ubuntu.com/security/CVE-2026-4046)
[CVE-2026-42499](https://ubuntu.com/security/CVE-2026-42499)
[CVE-2026-42501](https://ubuntu.com/security/CVE-2026-42501)
[CVE-2026-4437](https://ubuntu.com/security/CVE-2026-4437)
[CVE-2026-5773](https://ubuntu.com/security/CVE-2026-5773)
[CVE-2026-6276](https://ubuntu.com/security/CVE-2026-6276)
[CVE-2026-27144](https://ubuntu.com/security/CVE-2026-27144)
[CVE-2026-39883](https://ubuntu.com/security/CVE-2026-39883)
[CVE-2026-4878](https://ubuntu.com/security/CVE-2026-4878)
[CVE-2026-5545](https://ubuntu.com/security/CVE-2026-5545)
[CVE-2026-32282](https://ubuntu.com/security/CVE-2026-32282)
[CVE-2026-32289](https://ubuntu.com/security/CVE-2026-32289)
[CVE-2026-39823](https://ubuntu.com/security/CVE-2026-39823)
[CVE-2026-39826](https://ubuntu.com/security/CVE-2026-39826)
[CVE-2026-39817](https://ubuntu.com/security/CVE-2026-39817)
[CVE-2026-4873](https://ubuntu.com/security/CVE-2026-4873)
[CVE-2026-6253](https://ubuntu.com/security/CVE-2026-6253)
[CVE-2026-32288](https://ubuntu.com/security/CVE-2026-32288)
[CVE-2026-39350](https://ubuntu.com/security/CVE-2026-39350)
[CVE-2026-4438](https://ubuntu.com/security/CVE-2026-4438)
[CVE-2026-39819](https://ubuntu.com/security/CVE-2026-39819)
[CVE-2026-39825](https://ubuntu.com/security/CVE-2026-39825)
[CVE-2026-6429](https://ubuntu.com/security/CVE-2026-6429)
[CVE-2026-7168](https://ubuntu.com/security/CVE-2026-7168)
[CVE-2026-35469](https://ubuntu.com/security/CVE-2026-35469)
[CVE-2026-5958](https://ubuntu.com/security/CVE-2026-5958)

### Announcement
The following images are now rolling out for managed Cloud Service Mesh:
- 1.21.6-asm.32 is rolling out to the rapid release channel.
- The regular release channel is being upgraded from 1.20 to 1.21.6-asm.32.
- The stable release channel is being upgraded from 1.19 to 1.20.8-asm.80.

### Fixed
These patch releases contain the fixes for the following CVEs:
[CVE-2026-27143](https://ubuntu.com/security/CVE-2026-27143)
[CVE-2026-31789](https://ubuntu.com/security/CVE-2026-31789)
[CVE-2026-27140](https://ubuntu.com/security/CVE-2026-27140)
[CVE-2026-28387](https://ubuntu.com/security/CVE-2026-28387)
[CVE-2026-41413](https://ubuntu.com/security/CVE-2026-41413)
[CVE-2026-2219](https://ubuntu.com/security/CVE-2026-2219)
[CVE-2026-27135](https://ubuntu.com/security/CVE-2026-27135)
[CVE-2026-28388](https://ubuntu.com/security/CVE-2026-28388)
[CVE-2026-28389](https://ubuntu.com/security/CVE-2026-28389)
[CVE-2026-28390](https://ubuntu.com/security/CVE-2026-28390)
[CVE-2026-29181](https://ubuntu.com/security/CVE-2026-29181)
[CVE-2026-31790](https://ubuntu.com/security/CVE-2026-31790)
[CVE-2026-32280](https://ubuntu.com/security/CVE-2026-32280)
[CVE-2026-32281](https://ubuntu.com/security/CVE-2026-32281)
[CVE-2026-32283](https://ubuntu.com/security/CVE-2026-32283)
[CVE-2026-33811](https://ubuntu.com/security/CVE-2026-33811)
[CVE-2026-33814](https://ubuntu.com/security/CVE-2026-33814)
[CVE-2026-34986](https://ubuntu.com/security/CVE-2026-34986)
[CVE-2026-39820](https://ubuntu.com/security/CVE-2026-39820)
[CVE-2026-39836](https://ubuntu.com/security/CVE-2026-39836)
[CVE-2026-4046](https://ubuntu.com/security/CVE-2026-4046)
[CVE-2026-42499](https://ubuntu.com/security/CVE-2026-42499)
[CVE-2026-42501](https://ubuntu.com/security/CVE-2026-42501)
[CVE-2026-4437](https://ubuntu.com/security/CVE-2026-4437)
[CVE-2026-5773](https://ubuntu.com/security/CVE-2026-5773)
[CVE-2026-6276](https://ubuntu.com/security/CVE-2026-6276)
[CVE-2026-27144](https://ubuntu.com/security/CVE-2026-27144)
[CVE-2026-39883](https://ubuntu.com/security/CVE-2026-39883)
[CVE-2026-4878](https://ubuntu.com/security/CVE-2026-4878)
[CVE-2026-5545](https://ubuntu.com/security/CVE-2026-5545)
[CVE-2026-32282](https://ubuntu.com/security/CVE-2026-32282)
[CVE-2026-32289](https://ubuntu.com/security/CVE-2026-32289)
[CVE-2026-39823](https://ubuntu.com/security/CVE-2026-39823)
[CVE-2026-39826](https://ubuntu.com/security/CVE-2026-39826)
[CVE-2026-39817](https://ubuntu.com/security/CVE-2026-39817)
[CVE-2026-4873](https://ubuntu.com/security/CVE-2026-4873)
[CVE-2026-6253](https://ubuntu.com/security/CVE-2026-6253)
[CVE-2026-32288](https://ubuntu.com/security/CVE-2026-32288)
[CVE-2026-39350](https://ubuntu.com/security/CVE-2026-39350)
[CVE-2026-4438](https://ubuntu.com/security/CVE-2026-4438)
[CVE-2026-39819](https://ubuntu.com/security/CVE-2026-39819)
[CVE-2026-39825](https://ubuntu.com/security/CVE-2026-39825)
[CVE-2026-6429](https://ubuntu.com/security/CVE-2026-6429)
[CVE-2026-7168](https://ubuntu.com/security/CVE-2026-7168)
[CVE-2026-35469](https://ubuntu.com/security/CVE-2026-35469)
[CVE-2026-5958](https://ubuntu.com/security/CVE-2026-5958)

### Announcement
1.26.8-asm.10 is now available for in-cluster Cloud Service Mesh.
For details on upgrading Cloud Service Mesh, see [Upgrade Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs/upgrade/upgrade). Cloud Service Mesh 1.26.8-asm.10 uses Envoy v1.34.14.

Patch 1.26.8-asm.10 contains fixes for the following platform CVEs:
[CVE-2022-31045](https://ubuntu.com/security/CVE-2022-31045)
[CVE-2026-27143](https://ubuntu.com/security/CVE-2026-27143)
[CVE-2026-31789](https://ubuntu.com/security/CVE-2026-31789)
[CVE-2026-27140](https://ubuntu.com/security/CVE-2026-27140)
[CVE-2026-28387](https://ubuntu.com/security/CVE-2026-28387)
[CVE-2026-41413](https://ubuntu.com/security/CVE-2026-41413)
[CVE-2019-14993](https://ubuntu.com/security/CVE-2019-14993)
[CVE-2021-39155](https://ubuntu.com/security/CVE-2021-39155)
[CVE-2021-39156](https://ubuntu.com/security/CVE-2021-39156)
[CVE-2022-23635](https://ubuntu.com/security/CVE-2022-23635)
[CVE-2026-2219](https://ubuntu.com/security/CVE-2026-2219)
[CVE-2026-27135](https://ubuntu.com/security/CVE-2026-27135)
[CVE-2026-28388](https://ubuntu.com/security/CVE-2026-28388)
[CVE-2026-28389](https://ubuntu.com/security/CVE-2026-28389)
[CVE-2026-28390](https://ubuntu.com/security/CVE-2026-28390)
[CVE-2026-29181](https://ubuntu.com/security/CVE-2026-29181)
[CVE-2026-31790](https://ubuntu.com/security/CVE-2026-31790)
[CVE-2026-32280](https://ubuntu.com/security/CVE-2026-32280)
[CVE-2026-32281](https://ubuntu.com/security/CVE-2026-32281)
[CVE-2026-32283](https://ubuntu.com/security/CVE-2026-32283)
[CVE-2026-33811](https://ubuntu.com/security/CVE-2026-33811)
[CVE-2026-33814](https://ubuntu.com/security/CVE-2026-33814)
[CVE-2026-34986](https://ubuntu.com/security/CVE-2026-34986)
[CVE-2026-39820](https://ubuntu.com/security/CVE-2026-39820)
[CVE-2026-39836](https://ubuntu.com/security/CVE-2026-39836)
[CVE-2026-4046](https://ubuntu.com/security/CVE-2026-4046)
[CVE-2026-42499](https://ubuntu.com/security/CVE-2026-42499)
[CVE-2026-42501](https://ubuntu.com/security/CVE-2026-42501)
[CVE-2026-4437](https://ubuntu.com/security/CVE-2026-4437)
[CVE-2026-5773](https://ubuntu.com/security/CVE-2026-5773)
[CVE-2026-6276](https://ubuntu.com/security/CVE-2026-6276)
[CVE-2026-27144](https://ubuntu.com/security/CVE-2026-27144)
[CVE-2026-39883](https://ubuntu.com/security/CVE-2026-39883)
[CVE-2026-4878](https://ubuntu.com/security/CVE-2026-4878)
[CVE-2026-5545](https://ubuntu.com/security/CVE-2026-5545)
[CVE-2026-32282](https://ubuntu.com/security/CVE-2026-32282)
[CVE-2026-32289](https://ubuntu.com/security/CVE-2026-32289)
[CVE-2026-39823](https://ubuntu.com/security/CVE-2026-39823)
[CVE-2026-39826](https://ubuntu.com/security/CVE-2026-39826)
[CVE-2026-39817](https://ubuntu.com/security/CVE-2026-39817)
[CVE-2026-4873](https://ubuntu.com/security/CVE-2026-4873)
[CVE-2026-6253](https://ubuntu.com/security/CVE-2026-6253)
[CVE-2026-32288](https://ubuntu.com/security/CVE-2026-32288)
[CVE-2026-39350](https://ubuntu.com/security/CVE-2026-39350)
[CVE-2026-4438](https://ubuntu.com/security/CVE-2026-4438)
[CVE-2026-39819](https://ubuntu.com/security/CVE-2026-39819)
[CVE-2026-39825](https://ubuntu.com/security/CVE-2026-39825)
[CVE-2026-6429](https://ubuntu.com/security/CVE-2026-6429)
[CVE-2026-7168](https://ubuntu.com/security/CVE-2026-7168)
[CVE-2026-35469](https://ubuntu.com/security/CVE-2026-35469)
[CVE-2026-5958](https://ubuntu.com/security/CVE-2026-5958)

Generally available: You can gradually create Flex-start VMs in a managed instance group (MIG) as capacity becomes available. Unlike resize requests for MIGs that wait for full capacity before creating VMs, this method might create only a portion of your requested Flex-start VMs if capacity is unavailable. The MIG creates the remaining VMs later as capacity permits. Flex-start VMs run for up to seven days and help you obtain high-demand resources, such as GPUs, at a discounted price.
For more information, see [Create a MIG that uses Flex-start VMs](https://docs.cloud.google.com/compute/docs/instance-groups/create-mig-with-flex-start-vms).

Various bug fixes and minor product enhancements.

Gemini Enterprise: DRZ and MLP compliance in the EU for NotebookLM Enterprise
Gemini Enterprise is compliant with data residency (DRZ) and machine learning processing (MLP) requirements in the EU for NotebookLM Enterprise for adding sources and interacting with the sources (chat). However, the Discover Sources feature and Studio features, such as audio overview, slide deck, infographic, video overview, mind map, and reports, are not MLP compliant.
For more information on location limitations, see [NotebookLM limitations](https://docs.cloud.google.com/gemini/enterprise/docs/locations#notebooklm-limitations).

### Announcement
Google Cloud CCaaS 4.38
We've released version 4.38 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule that you have chosen. For more information, see [Deployment schedules](https://cloud.google.com/contact-center/ccai-platform/docs/deployment-schedules).

### Feature
Sort and filter emails
Agents can now sort and filter emails by date in the email adapter.
User experience changes: The email adapter has the following new UI elements:
- A button to toggle between Oldest to newest and Newest to oldest in
the email list.
- A Filter by Date list to filter by preset filters or by a configurable
date range.
A button to toggle between Oldest to newest and Newest to oldest in the email list.
A Filter by Date list to filter by preset filters or by a configurable date range.
For more information, see [Email lists](https://docs.cloud.google.com/contact-center/ccai-platform/docs/email-adapter#email-lists).

### Fixed
This release addresses the following issues:
- Fixed an issue where Canadian French translations for notifications and
error messages were appearing in English.
- Fixed an issue where the Alvaria WFM Agent Performance report was
exporting every minute instead of once daily.
- Fixed an issue where the Agent Preferences table on the Agent
Availability dashboard didn't update when an agent modified their
availability preferences.
- Fixed an agent desktop issue where clicking the Transfer button in an
SMS chat displayed an error instead of starting a transfer.
- Fixed an issue where a delay in Salesforce task creation caused a lag in
updating the ticket ID on calls.
- Fixed an issue where agents were unable to transfer SMS chats.
- Fixed an issue where incoming chats were routed to newly signed-in agents
instead of to those who had been available the longest.
- Fixed an issue where messages in the chat adapter's chat history weren't
labeled or aligned to distinguish agent messages from end-user messages.
- Fixed an issue in the IVR Queue Menu Settings pane where the text input
field didn't appear when users selected Text-to-speech.
- Fixed an issue in the SMS Queue Menu Settings pane where phone numbers
weren't appearing in the incoming and outbound Assigned Numbers fields.
- Fixed an issue where the web SDK didn't load.
- Fixed an issue where live transcripts and conversation summarization didn't
display in the agent desktop following an instance update.
Fixed an issue where Canadian French translations for notifications and error messages were appearing in English.
Fixed an issue where the Alvaria WFM Agent Performance report was exporting every minute instead of once daily.
Fixed an issue where the Agent Preferences table on the Agent Availability dashboard didn't update when an agent modified their availability preferences.
Fixed an agent desktop issue where clicking the Transfer button in an SMS chat displayed an error instead of starting a transfer.
Fixed an issue where a delay in Salesforce task creation caused a lag in updating the ticket ID on calls.
Fixed an issue where agents were unable to transfer SMS chats.
Fixed an issue where incoming chats were routed to newly signed-in agents instead of to those who had been available the longest.
Fixed an issue where messages in the chat adapter's chat history weren't labeled or aligned to distinguish agent messages from end-user messages.
Fixed an issue in the IVR Queue Menu Settings pane where the text input field didn't appear when users selected Text-to-speech.
Fixed an issue in the SMS Queue Menu Settings pane where phone numbers weren't appearing in the incoming and outbound Assigned Numbers fields.
Fixed an issue where the web SDK didn't load.
Fixed an issue where live transcripts and conversation summarization didn't display in the agent desktop following an instance update.

### Change
AlienVault USM Appliance: Version 28.0
- Refactored the code for the following action:

Get PCAP Files For Events
- Get PCAP Files For Events
- Get PCAP Files For Events

### Change
ConnectWise: Version 23.0
- Refactored the code for the following action:

Create Alerts Ticket
- Create Alerts Ticket
- Create Alerts Ticket

### Change
Google Chronicle: Version 84.0
- Refactored the code for the following action:

Get Detection Details
- Get Detection Details
- Get Detection Details

### Change
Jira: Version 58.0
- Refactored the code for the following action:

Create Alert Issue
- Create Alert Issue
- Create Alert Issue

### Change
ServiceDesk Plus: Version 10.0
- Refactored the code for the following action:

Create Alert Request
- Create Alert Request
- Create Alert Request

### Change
ServiceDesk PlusV3: Version 10.0
- Refactored the code for the following action:

Create Alert Request
- Create Alert Request
- Create Alert Request

### Change
ServiceNow: Version 67.0
- Refactored the code for the following action:

Create Alert Incident
- Create Alert Incident
- Create Alert Incident

### Change
Siemplify: Version 245.0
- Refactored internal code execution logic for the platform integration.

### Change
MISP: Version 275.6
- Refactored internal code execution logic and optimized core integration components.

### Change
Microsoft Sentinel Incident Tracking Connector: Version 29.0
- Added the Incident Creation Time Filter (days) advanced parameter and optimized error handling logic.

```
Incident Creation Time Filter (days)
```

You can use Policy Analyzer to visualize allow policy queries. This can help you understand the relationship between identities, roles, permissions, and resources within your resource hierarchy.
Policy Analyzer supports queries about agent identities. You can see who can access an agent or what resources and agents a specific agent can reach.
These features are available in in [Preview](https://cloud.google.com/products#product-launch-stages).
For more information, see [Analyze allow policies](https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies).

Added support for inspecting and de-identifying conversational content. You can now include a [Conversation](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/[ContentItem](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem)#Conversation) in your ContentItem requests.

```
[Conversation](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem#Conversation)
```


```
[ContentItem](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem)
```

### Feature
[Preview stage](https://cloud.google.com/products#product-launch-stages) support for the following integration:
- [Workload Identity API](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products#table_workloadidentity)
[Workload Identity API](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products#table_workloadidentity)

### Feature
You can now configure a cooldown period to determine when autoscaling occurs for your read pool instances. For more information, see [Scale an instance](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale#autoscale-read-pool).

### Announcement
On June 2nd, 2026, we released an updated version of Apigee Cassandra.

### Security
This addresses the following vulnerabilities:
- [CVE-2026-39820](https://nvd.nist.gov/vuln/detail/CVE-2026-39820)
- [CVE-2026-42499](https://nvd.nist.gov/vuln/detail/CVE-2026-42499)
- [CVE-2026-39836](https://nvd.nist.gov/vuln/detail/CVE-2026-39836)
- [CVE-2026-33814](https://nvd.nist.gov/vuln/detail/CVE-2026-33814)
- [CVE-2026-42501](https://nvd.nist.gov/vuln/detail/CVE-2026-42501)
- [CVE-2026-33811](https://nvd.nist.gov/vuln/detail/CVE-2026-33811)
- [CVE-2026-39825](https://nvd.nist.gov/vuln/detail/CVE-2026-39825)
- [CVE-2026-39817](https://nvd.nist.gov/vuln/detail/CVE-2026-39817)
- [CVE-2026-39823](https://nvd.nist.gov/vuln/detail/CVE-2026-39823)
- [CVE-2026-39819](https://nvd.nist.gov/vuln/detail/CVE-2026-39819)
- [CVE-2026-39826](https://nvd.nist.gov/vuln/detail/CVE-2026-39826)
[CVE-2026-39820](https://nvd.nist.gov/vuln/detail/CVE-2026-39820)
[CVE-2026-42499](https://nvd.nist.gov/vuln/detail/CVE-2026-42499)
[CVE-2026-39836](https://nvd.nist.gov/vuln/detail/CVE-2026-39836)
[CVE-2026-33814](https://nvd.nist.gov/vuln/detail/CVE-2026-33814)
[CVE-2026-42501](https://nvd.nist.gov/vuln/detail/CVE-2026-42501)
[CVE-2026-33811](https://nvd.nist.gov/vuln/detail/CVE-2026-33811)
[CVE-2026-39825](https://nvd.nist.gov/vuln/detail/CVE-2026-39825)
[CVE-2026-39817](https://nvd.nist.gov/vuln/detail/CVE-2026-39817)
[CVE-2026-39823](https://nvd.nist.gov/vuln/detail/CVE-2026-39823)
[CVE-2026-39819](https://nvd.nist.gov/vuln/detail/CVE-2026-39819)
[CVE-2026-39826](https://nvd.nist.gov/vuln/detail/CVE-2026-39826)

[Remote functions](https://docs.cloud.google.com/bigquery/docs/remote-functions#create_a_remote_function) now support a custom path in the endpoint URL. You can reuse a single Cloud Run service for multiple BigQuery remote functions by specifying different path suffixes on the same endpoint. This feature is [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

A single-region Critical production SLA for Cloud Interconnect is [Generally Available](https://cloud.google.com/products#product-launch-stages).
For workloads that require 99.99% availability within a single region, you can now configure a single-region topology that achieves the Critical production SLA.
For more information, see [Establish 99.99% availability for Dedicated Interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability) or the [Cross-Cloud Interconnect overview](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview).

TLS post-quantum key exchange support is now available for Application Load Balancers and external proxy Network Load Balancers. Post-quantum key exchange is essential for protecting today's traffic from future quantum computing decryption risks (harvest now, decrypt later attacks). With post-quantum key exchange enabled, the load balancer uses post-quantum key exchange with clients that support TLS 1.3 and X25519MLKEM768 key exchange.

```
X25519MLKEM768
```

This feature is rolling out in three phases:
- Phase 1 (Until October 2026): Post-quantum key exchange is not enabled by
default. Customers can elect to opt in and enable it using their SSL policy.
- Phase 2 (October 2026 through October 2027): The feature is enabled by
default. Customers can elect to defer (opt out) if required.
- Phase 3 (After October 2027): The feature is enabled by default,
and options to defer are no longer effective.
Phase 1 (Until October 2026): Post-quantum key exchange is not enabled by default. Customers can elect to opt in and enable it using their SSL policy.
Phase 2 (October 2026 through October 2027): The feature is enabled by default. Customers can elect to defer (opt out) if required.
Phase 3 (After October 2027): The feature is enabled by default, and options to defer are no longer effective.
We strongly encourage you to enable post-quantum key exchange now, even before it is turned on by default. The opportunity to test this today will help you verify that clients and any intermediate network devices can properly negotiate post-quantum key exchange.
For more information, see [Post-quantum key exchange](https://docs.cloud.google.com/load-balancing/docs/post-quantum-tls#post-quantum-key-exchange).

Support for Histogram widgets on custom dashboards is [generally available](https://docs.cloud.google.com/products#product-launch-stages). These widgets extract the most recent value from each time series, group those values into ranges, and then provide a graphical representation of the result. Unlike tables or other widgets that display the most recent values, Histograms display information about the relative frequency of ranges of values.
This widget is one of several visualizations that you can use to display the most recent values. For more information, see the following documents:
- [Configure a histogram (Google Cloud console)](https://docs.cloud.google.com/monitoring/charts#add_histogram)
- [Dashboard with an XyChart configured as a histogram (API)](https://docs.cloud.google.com/monitoring/dashboards/api-examples#dashboard_with_a_histogram_widget)
[Configure a histogram (Google Cloud console)](https://docs.cloud.google.com/monitoring/charts#add_histogram)
[Dashboard with an XyChart configured as a histogram (API)](https://docs.cloud.google.com/monitoring/dashboards/api-examples#dashboard_with_a_histogram_widget)

The create-observability bucket flow enforces organization policies with constraints on resource locations. This flow also enforces policies that require customer-managed encryption keys (CMEKs) and that restrict the projects that store those keys. Your trace data is stored in an observability bucket.
For more information, see the following:
- [Set defaults for observability buckets](https://docs.cloud.google.com/stackdriver/docs/observability/set-defaults-for-observability-buckets)
- [Support for CMEKs](https://docs.cloud.google.com/stackdriver/docs/observability/cmek)
[Set defaults for observability buckets](https://docs.cloud.google.com/stackdriver/docs/observability/set-defaults-for-observability-buckets)
[Support for CMEKs](https://docs.cloud.google.com/stackdriver/docs/observability/cmek)

Datastream now offers a free tier for change data capture (CDC) data processed from Google Cloud sources, such as AlloyDB for PostgreSQL and Spanner. You get the first 100 GiB of CDC data for free per billing account, per month.
For more information, see the [Pricing](https://cloud.google.com/datastream/pricing) page.

You can configure your Filestore instances to use Private Service Connect with NFSv3 or NFSv4.1 file system protocols and IPv4 or IPv6 address families to allow consumers access managed services privately from inside their VPC network. This feature is [generally available](https://cloud.google.com/products#product-launch-stages).
For more information, see [Create a Filestore instance with Private Service Connect](https://docs.cloud.google.com/filestore/docs/configure-psc).

Gemini Enterprise: Gemini 3 pro image (Nano Banana Pro) and Gemini 3.1 flash image (Nano Banana 2) for image generation
Gemini 3.1 flash image (Nano Banana 2) and Gemini 3 pro image (gemini-3.0-pro-image) are generally available (GA) in Gemini Enterprise app.
To make these models available to users in your Gemini Enterprise app, a Gemini Enterprise administrator can manage them in the feature controls:
- Gemini 3 pro image (Nano Banana Pro): Turned off by default and is only available in the
Global region.
- Gemini 3.1 flash image (Nano Banana 2): Turned off by default and is only available in the
Global region. If an administrator turned on this model during
its Public Preview, it remains turned on in GA in the
Gemini Enterprise app.
Gemini 3 pro image (Nano Banana Pro): Turned off by default and is only available in the Global region.
Gemini 3.1 flash image (Nano Banana 2): Turned off by default and is only available in the Global region. If an administrator turned on this model during its Public Preview, it remains turned on in GA in the Gemini Enterprise app.
For more information about feature controls, see [Manage features on the web app](https://docs.cloud.google.com/gemini/enterprise/docs/manage-web-app-features).

Updates to abuse monitoring and zero data retention documentation
Documentation for abuse monitoring, zero data retention, and responsible AI has been updated to align with the Advanced AI Safety Addendum. These updates include new details regarding Advanced AI safety, partner-specific terms, and request-response logging for models like Claude Mythos and Opus.
For more information, see:
- [Abuse monitoring](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/abuse-monitoring)
- [Zero data retention](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention)
- [Responsible AI](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/responsible-ai)
[Abuse monitoring](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/abuse-monitoring)
[Zero data retention](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention)
[Responsible AI](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/responsible-ai)

GKE is introducing the following changes to expand the capabilities of maintenance exclusions:
- Per-node pool maintenance exclusions: Available in release channels, these replicate the functionality of disabling node pool auto-upgrades when your cluster isn't enrolled in a release channel.
- Extended "No upgrades" exclusion: The "No upgrades" default maintenance exclusion can now be up to 90 days long.
For more information, see [Maintenance exclusions](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions).

(Managed Airflow Gen 3) You can now [access Cloud Run endpoints restricted to internal ingress traffic](https://docs.cloud.google.com/composer/docs/composer-3/connect-vpc-network#cloud-run-traffic) through your environment's network attachment. This feature is available through gcloud CLI beta commands and beta Cloud Composer API in all Managed Airflow (Gen 3) versions.

### Announcement
Google Cloud NetApp Volumes Flex Unified service level is available with limited performance in the following region:
- us-east5 (Columbus)
For more information about limited performance regions, see [Supported regions for Flex Unified limited performance](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels#supported_regions_for_flex_unified_limited_performance).

### Feature
Agent Assist offers [summarization with custom sections 6.0](https://docs.cloud.google.com/agent-assist/docs/summarization-with-custom-sections) in GA. The 6.0 version is powered by gemini-3.5-flash and available in all Agent Assist [regions](https://docs.cloud.google.com/agent-assist/docs/regionalization).

```
gemini-3.5-flash
```

### Change
Agent Assist offers summarization autoevaluation with more rubrics for evaluating completeness. This update also explains the use of N/A in the overall performance view.
[Summarization autoevaluation](https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-metrics) is available in the following additional regions:
- us-east1
- northamerica-northeast1
- eu-west1
- eu-west2
- eu-west3
- eu-west4
- asia-southeast1
- asia-northeast1
- asia-south1
- australia-southeast1

The Facebook Ads connector for the BigQuery Data Transfer Service now supports data transfers from the following Facebook Ads reports:
- AdInsightsMMM
- Ads
- AdCreatives
- AdSets
- Campaigns
- AdImages
- AdLabels
- Businesses
- CustomAudiences

```
AdInsightsMMM
```


```
Ads
```


```
AdCreatives
```


```
AdSets
```


```
Campaigns
```


```
AdImages
```


```
AdLabels
```


```
Businesses
```


```
CustomAudiences
```

CUD Analysis is Generally Available
CUD Analysis has reached general availability (GA). This tool supports the new spend-based CUD model and provides a unified interface for customers to examine both spend-based and resource-based CUDs. It offers a consolidated view of Compute resources including the benefits of both resource-based and spend-based CUDs.
You can use this tool to do the following:
- Understand savings: Understand the financial impact of your commitments.
- Track key metrics: Track how effectively your commitments are being
used.
- Download data: Download a CSV file of your daily usage for offline
analysis and reporting.
For more information, see [Analyze the effectiveness of your CUDs](https://docs.cloud.google.com/billing/docs/how-to/analyze-cuds).

A modernized, component-centric interface for Cloud Load Balancing is available in Preview. This inaugural release provides an expanded perspective of load balancing infrastructure, offering enhanced transparency into individual component configurations.
[Go to Cloud Console](https://console.cloud.google.com/net-services/loadbalancing/advanced)
The key features of this release include the following:
- Comprehensive resource inventory: A centralized, searchable, and sortable
management layer for granular resources—including forwarding rules,
target proxies, and TLSRoutes—facilitating detailed monitoring of
resource status and interdependencies.
- Interactive resource topology: A contextual visualization tool that maps
traffic flow from forwarding rules through proxies to backends, enabling
technical teams to efficiently analyze dependencies and accelerate issue
resolution.
- Integrated audit logging: Embedded audit logs within the console that
offer a unified module for monitoring and tracking
historical configuration changes.
Comprehensive resource inventory: A centralized, searchable, and sortable management layer for granular resources—including forwarding rules, target proxies, and TLSRoutes—facilitating detailed monitoring of resource status and interdependencies.
Interactive resource topology: A contextual visualization tool that maps traffic flow from forwarding rules through proxies to backends, enabling technical teams to efficiently analyze dependencies and accelerate issue resolution.
Integrated audit logging: Embedded audit logs within the console that offer a unified module for monitoring and tracking historical configuration changes.

The details page for a span can display the call hierarchy of a trace by using a directed acyclic graph (DAG). If you view an Application Monitoring dashboard and explore the trace data that it displays, the flyout supports the DAG option. If you open the Trace Explorer page and explore a span, the DAG option is also available.
For more information, see the following:
- [Application Monitoring: Explore a trace](https://docs.cloud.google.com/monitoring/docs/application-monitoring#explore-trace)
- [Trace Explorer: Explore a trace](https://docs.cloud.google.com/trace/docs/finding-traces#explore)
[Application Monitoring: Explore a trace](https://docs.cloud.google.com/monitoring/docs/application-monitoring#explore-trace)
[Trace Explorer: Explore a trace](https://docs.cloud.google.com/trace/docs/finding-traces#explore)

Generally available: Compute Engine supports Google's custom-developed accelerator Tensor Processing Unit (TPU), providing a converged experience across AI accelerators on Google Cloud. You can use the Compute Engine instance API and managed instance group (MIG) API to create and manage TPU VMs. You can perform standard VM configurations such as using a custom OS or configure boot disk size. Compute Engine APIs support the creation and management of TPU slices across all consumption options, enabling small-scale experimentation and large-scale training and inference workloads.
For more information, see [TPU resources in Compute Engine](https://docs.cloud.google.com/tpu/docs/tpus-in-compute-engine).

The details page for a span can display the call hierarchy of a trace using a directed acyclic graph (DAG). One way to view a span's details is to open the Trace Explorer page and select the span. The DAG view is also available for some integrations. For example, if you view an Application Monitoring dashboard and explore the trace data it displays, the flyout supports the DAG option.
For more information, see the following:
- [Trace Explorer: Explore a trace](https://docs.cloud.google.com/trace/docs/finding-traces#explore)
- [Application Monitoring: Explore a trace](https://docs.cloud.google.com/monitoring/docs/application-monitoring#explore-trace)
[Trace Explorer: Explore a trace](https://docs.cloud.google.com/trace/docs/finding-traces#explore)
[Application Monitoring: Explore a trace](https://docs.cloud.google.com/monitoring/docs/application-monitoring#explore-trace)

### Feature
Generally available: Compute Engine supports the Google's custom-developed accelerator Tensor Processing Unit (TPU), providing a converged experience across AI accelerators on Google Cloud. You can use the Compute Engine instance API and managed instance group (MIG) API to create and manage TPU VMs. You can perform standard VM configurations such as using a custom OS or configure boot disk size. Compute Engine APIs support the creation and management of TPU slices across all consumption options, enabling small-scale experimentation and large-scale training and inference workloads.
For more information, see [TPU resources in Compute Engine](https://docs.cloud.google.com/compute/docs/tpus/tpu-resources-in-compute-engine).

### Feature
Generally available: In a managed instance group (MIG), obtain the requested number of virtual machine (VM) instances all at once by using bulk mode of the target size policy. Using bulk mode helps you avoid partial VM provisioning in a MIG. Bulk mode is particularly beneficial for batch workloads, such as high performance computing (HPC) or distributed training, that require full capacity before they can start. For more information, see [About bulk mode](https://docs.cloud.google.com/compute/docs/instance-groups/about-bulk-mode).

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-121-18867-381-148
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18867.381.148/lakitu/gpu_driver_versions.textproto)

### Change
Added dev-libs/mpdecimal and dev-python/gentoo-common.

### Change
Updated app-containers/runc from v1.2.8 to v1.2.9

### Change
Updated dev-lang/python to v3.11.15.

### Fixed
Added support for NVIDIA driver v580.159.04.

### Fixed
Upgraded app-shells/dash to v0.5.13.4.

### Security
Fixed EFI variable OOB read in grub config parsing.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-125-19216-395-55
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.85
[See List](https://storage.googleapis.com/cos-tools/19216.395.55/lakitu/gpu_driver_versions.textproto)

### Change
Allow overriding IMA policy from oem partition.

### Change
On cchost boards, autoload IMA policy on boot.

### Change
Set static UUID for the stateful partition.

### Fixed
Added support for NVIDIA driver v580.159.04.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-117-18613-613-29
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18613.613.29/lakitu/gpu_driver_versions.textproto)

### Change
Updated Python to v3.8.20.

### Change
Updated app-containers/runc from v1.2.8 to v1.2.9

### Fixed
Added support for NVIDIA driver v580.159.04.

### Security
Fixed EFI variable OOB read in grub config parsing.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-129-19506-224-7
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.90
[See List](https://storage.googleapis.com/cos-tools/19506.224.7/lakitu/gpu_driver_versions.textproto)

### Change
Runtime sysctl changes:
- Changed: net.ipv4.udp_mem: 188034   250714  376068 -> 188034    250715  376068

### Fixed
Added support for NVIDIA driver v580.159.04.

The [Filestore remote Model Context Protocol (MCP) server](https://docs.cloud.google.com/filestore/docs/use-filestore-mcp) is [generally available (GA)](https://cloud.google.com/products#product-launch-stages). The Filestore remote MCP server lets you create and manage Filestore instances from LLMs, AI applications, and AI-enabled development platforms.

Support for searching for and managing your Firestore resources using Knowledge Catalog, which is a platform for storing, managing, and accessing your metadata. To learn more, see [View Knowledge Catalog insights](https://cloud.google.com/firestore/native/docs/knowledge-catalog).

Support for searching for and managing your Firestore resources using Knowledge Catalog, which is a platform for storing, managing, and accessing your metadata. To learn more, see [View Knowledge Catalog insights](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/knowledge-catalog).

### Announcement
Gemini Enterprise: Agent Designer migration to Gemini 3.5 Flash
Agent Designer agents in the US and Global regions that previously migrated from Gemini 2.5 Flash and Gemini 2.5 Pro to Gemini 3.1 Pro have been migrated to Gemini 3.5 Flash. This migration is automatic and requires no action.
To use a different model, edit your agent's settings using either [conversational chat](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/edit-agent#edit-using-chat) or the [flow builder](https://docs.cloud.google.com/gemini/enterprise/docs/agent-designer/edit-agent#edit-using-flow).

### Feature
Gemini Enterprise: Create and edit documents and slides in Canvas (Preview)
Canvas is a dedicated, interactive tool within the Gemini Enterprise web app. It allows you to create and edit AI-generated documents and presentations directly from your chats. You can then export these to Google Workspace, Microsoft Office formats, and PDF.
A Gemini Enterprise administrator must turn on the feature so that users can use it in the Gemini Enterprise app. For more information about feature controls, see [Manage features on the web app](https://docs.cloud.google.com/gemini/enterprise/docs/manage-web-app-features).
This feature is in Public Preview. For more information, see [Create and edit documents and slides in Canvas](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-canvas).

Gemini 2.0 Flash and Gemini 2.0 Flash-Lite are discontinued
Gemini 2.0 Flash and 2.0 Flash-Lite are discontinued and are no longer available. This includes both model serving and Provisioned Throughput. Use Gemini 3.1 Flash-Lite, Gemma 4, or more recent Gemini releases.

All 3-year (36-month) post-paid ve2 [committed use discounts (CUDs)](https://docs.cloud.google.com/vmware-engine/docs/cud) for Google Cloud VMware Engine purchased after May 31, 2026, will terminate on October 15, 2028. 3-year CUD pricing will apply, regardless of the actual term of the CUD. Additionally, 3-year pre-paid CUDs are no longer available; only 1-year pre-paid CUDs are available.

```
ve2
```

The [Manage access to preview features feature](https://docs.cloud.google.com/chronicle/docs/secops/release-notes#May_28_2026) has been rolled back.

New SAP certification for operating system: RHEL 10.0 for SAP
For use with SAP HANA and SAP NetWeaver on Google Cloud, SAP has certified the operating system Red Hat Enterprise Linux (RHEL) 10.0 for SAP.
For more information about SAP-certified operating systems, see:
- [Certified operating systems for SAP HANA](https://docs.cloud.google.com/sap/docs/sap-hana-os-support#quick_reference_table)
- [Certified operating systems for SAP NetWeaver](https://docs.cloud.google.com/sap/docs/netweaver-os-support#quick_reference_table)
[Certified operating systems for SAP HANA](https://docs.cloud.google.com/sap/docs/sap-hana-os-support#quick_reference_table)
[Certified operating systems for SAP NetWeaver](https://docs.cloud.google.com/sap/docs/netweaver-os-support#quick_reference_table)

General Availability: [Composite Health for Private Service Connect](https://docs.cloud.google.com/vpc/docs/about-composite-health), formerly known as Private Service Connect health, lets service producers define health criteria for published services, enabling automatic cross-region failover for consumers that access the service by using Private Service Connect backends.

reCAPTCHA Mobile SDK v18.9.1 is available for Android. This version fixes an issue that caused package name collisions when building projects using Android Gradle Plugin version 9.0 or higher.

Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.

```
log_type
```

- 1Password Audit Events (ONEPASSWORD_AUDIT_EVENTS)
- AIX system (AIX_SYSTEM)
- Apache (APACHE)
- Aruba EdgeConnect SD-WAN (ARUBA_EDGECONNECT_SDWAN)
- Avaya Aura Experience Portal (AVAYA_AURA)
- AWS CloudFront (AWS_CLOUDFRONT)
- AWS Cloudtrail (AWS_CLOUDTRAIL)
- AWS GuardDuty (GUARDDUTY)
- AWS Security Hub (AWS_SECURITY_HUB)
- Azure AD (AZURE_AD)
- Azure AD Organizational Context (AZURE_AD_CONTEXT)
- Azure AD Sign-In (AZURE_AD_SIGNIN)
- Azure SQL (AZURE_SQL)
- Azure Storage Audit (AZURE_STORAGE_AUDIT)
- Barracuda WAF (BARRACUDA_WAF)
- Blue Coat Proxy (BLUECOAT_WEBPROXY)
- Chrome Management (CHROME_MANAGEMENT)
- Cisco ACS (CISCO_ACS)
- Cisco ISE (CISCO_ISE)
- Cisco Secure Access (CISCO_SECURE_ACCESS)
- Cisco Secure Workload (CISCO_SECURE_WORKLOAD)
- Cisco Switch (CISCO_SWITCH)
- Cisco Umbrella Audit (CISCO_UMBRELLA_AUDIT)
- Citrix Netscaler (CITRIX_NETSCALER)
- Claroty Xdome (CLAROTY_XDOME)
- Claude Compliance Logs (CLAUDE_COMPLIANCE_LOGS)
- Cloudflare (CLOUDFLARE)
- Cloudflare Warp (CLOUDFLARE_WARP)
- Corelight (CORELIGHT)
- CrowdStrike Alerts API (CS_ALERTS)
- CrowdStrike Falcon (CS_EDR)
- CyberArk (CYBERARK)
- CyberArk Privileged Access Manager (PAM) (CYBERARK_PAM)
- Duo Administrator Logs (DUO_ADMIN)
- EfficientIP DDI (EFFICIENTIP_DDI)
- Elastic Audit Beats (ELASTIC_AUDITBEAT)
- Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
- F5 ASM (F5_ASM)
- Forcepoint Proxy (FORCEPOINT_WEBPROXY)
- FortiGate (FORTINET_FIREWALL)
- GitHub (GITHUB)
- Google Cloud Asset Inventory (GCP_CLOUD_ASSET_INVENTORY)
- Google Cloud Audit (GCP_CLOUDAUDIT)
- Google Compute Context (GCP_COMPUTE_CONTEXT)
- Google Threat Intelligence IOC (GTI_IOC)
- GTB Technologies DLP (GTB_DLP)
- HP Aruba (ClearPass) (CLEARPASS)
- IBM Websphere Application Server (IBM_WEBSPHERE_APP_SERVER)
- IBM z/OS (IBM_ZOS)
- Imperva (IMPERVA_WAF)
- Imperva CEF (IMPERVA_CEF)
- Imperva DRA (IMPERVA_DRA)
- Imperva SecureSphere Management (IMPERVA_SECURESPHERE)
- Island Browser logs (ISLAND_BROWSER)
- Juniper (JUNIPER_FIREWALL)
- Juniper Mist (JUNIPER_MIST)
- Kubernetes Node (KUBERNETES_NODE)
- LastPass Password Management (LASTPASS)
- Linux Auditing System (AuditD) (AUDITD)
- Microsoft Azure Activity (AZURE_ACTIVITY)
- Microsoft Defender for Office 365 (MICROSOFT_DEFENDER_MAIL)
- Microsoft IIS (IIS)
- Mobileiron (MOBILEIRON)
- Mongo Database (MONGO_DB)
- MySQL (MYSQL)
- Netapp Storagegrid (NETAPP_STORAGEGRID)
- Netskope V2 (NETSKOPE_ALERT_V2)
- Netskope Web Proxy (NETSKOPE_WEBPROXY)
- NGFW Enterprise (GCP_NGFW_ENTERPRISE)
- Office 365 (OFFICE_365)
- Office 365 Message Trace (OFFICE_365_MESSAGETRACE)
- Okta Scaleft (OKTA_SCALEFT)
- Oracle (ORACLE_DB)
- Oracle Cloud Infrastructure Audit Logs (OCI_AUDIT)
- Orca Cloud Security Platform (ORCA)
- Proofpoint On Demand (PROOFPOINT_ON_DEMAND)
- Radware Web Application Firewall (RADWARE_FIREWALL)
- Red Hat Directory Server LDAP (REDHAT_DIRECTORY_SERVER)
- Red Hat OpenShift (REDHAT_OPENSHIFT)
- Salesforce (SALESFORCE)
- Sangfor Next Generation Firewall (SANGFOR_NGAF)
- Security Command Center Error (GCP_SECURITYCENTER_ERROR)
- Security Command Center Misconfiguration (GCP_SECURITYCENTER_MISCONFIGURATION)
- Security Command Center Observation (GCP_SECURITYCENTER_OBSERVATION)
- Security Command Center Posture Violation (GCP_SECURITYCENTER_POSTURE_VIOLATION)
- Security Command Center Threat (GCP_SECURITYCENTER_THREAT)
- Security Command Center Toxic Combination (GCP_SECURITYCENTER_TOXIC_COMBINATION)
- Security Command Center Unspecified (GCP_SECURITYCENTER_UNSPECIFIED)
- Security Command Center Vulnerability (GCP_SECURITYCENTER_VULNERABILITY)
- SentinelOne Singularity Cloud Funnel (SENTINELONE_CF)
- ServiceNow Security (SERVICENOW_SECURITY)
- Sourcefire (SOURCEFIRE_IDS)
- Suricata EVE (SURICATA_EVE)
- Symantec Endpoint Protection (SEP)
- Sysdig (SYSDIG)
- Trend Micro Deep Security (TRENDMICRO_DEEP_SECURITY)
- Trend Micro Vision One Observerd Attack Techniques (TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES)
- Ubiquiti UniFi Switch (UBIQUITI_SWITCH)
- Unix system (NIX_SYSTEM)
- Upwind (UPWIND)
- VMware ESXi (VMWARE_ESX)

- VMWare VSphere (VMWARE_VSPHERE)
- Windows DNS (WINDOWS_DNS)
- Windows Event (WINEVTLOG)
- Wiz.io (WIZ_IO)
- Workday User Activity (WORKDAY_USER_ACTIVITY)
- Workspace Activities (WORKSPACE_ACTIVITY)
- Zscaler (ZSCALER_WEBPROXY)
- Zscaler CASB (ZSCALER_CASB)
- Zscaler DLP (ZSCALER_DLP)
- Zscaler Private Access (ZSCALER_ZPA)

```
ONEPASSWORD_AUDIT_EVENTS
```


```
AIX_SYSTEM
```


```
APACHE
```


```
ARUBA_EDGECONNECT_SDWAN
```


```
AVAYA_AURA
```


```
AWS_CLOUDFRONT
```


```
AWS_CLOUDTRAIL
```


```
GUARDDUTY
```


```
AWS_SECURITY_HUB
```


```
AZURE_AD
```


```
AZURE_AD_CONTEXT
```


```
AZURE_AD_SIGNIN
```


```
AZURE_SQL
```


```
AZURE_STORAGE_AUDIT
```


```
BARRACUDA_WAF
```


```
BLUECOAT_WEBPROXY
```


```
CHROME_MANAGEMENT
```


```
CISCO_ACS
```


```
CISCO_ISE
```


```
CISCO_SECURE_ACCESS
```


```
CISCO_SECURE_WORKLOAD
```


```
CISCO_SWITCH
```


```
CISCO_UMBRELLA_AUDIT
```


```
CITRIX_NETSCALER
```


```
CLAROTY_XDOME
```


```
CLAUDE_COMPLIANCE_LOGS
```


```
CLOUDFLARE
```


```
CLOUDFLARE_WARP
```


```
CORELIGHT
```


```
CS_ALERTS
```


```
CS_EDR
```


```
CYBERARK
```


```
CYBERARK_PAM
```


```
DUO_ADMIN
```


```
EFFICIENTIP_DDI
```


```
ELASTIC_AUDITBEAT
```


```
ELASTIC_WINLOGBEAT
```


```
F5_ASM
```


```
FORCEPOINT_WEBPROXY
```


```
FORTINET_FIREWALL
```


```
GITHUB
```


```
GCP_CLOUD_ASSET_INVENTORY
```


```
GCP_CLOUDAUDIT
```


```
GCP_COMPUTE_CONTEXT
```


```
GTI_IOC
```


```
GTB_DLP
```


```
CLEARPASS
```


```
IBM_WEBSPHERE_APP_SERVER
```


```
IBM_ZOS
```


```
IMPERVA_WAF
```


```
IMPERVA_CEF
```


```
IMPERVA_DRA
```


```
IMPERVA_SECURESPHERE
```


```
ISLAND_BROWSER
```


```
JUNIPER_FIREWALL
```


```
JUNIPER_MIST
```


```
KUBERNETES_NODE
```


```
LASTPASS
```


```
AUDITD
```


```
AZURE_ACTIVITY
```


```
MICROSOFT_DEFENDER_MAIL
```


```
IIS
```


```
MOBILEIRON
```


```
MONGO_DB
```


```
MYSQL
```


```
NETAPP_STORAGEGRID
```


```
NETSKOPE_ALERT_V2
```


```
NETSKOPE_WEBPROXY
```


```
GCP_NGFW_ENTERPRISE
```


```
OFFICE_365
```


```
OFFICE_365_MESSAGETRACE
```


```
OKTA_SCALEFT
```


```
ORACLE_DB
```


```
OCI_AUDIT
```


```
ORCA
```


```
PROOFPOINT_ON_DEMAND
```


```
RADWARE_FIREWALL
```


```
REDHAT_DIRECTORY_SERVER
```


```
REDHAT_OPENSHIFT
```


```
SALESFORCE
```


```
SANGFOR_NGAF
```


```
GCP_SECURITYCENTER_ERROR
```


```
GCP_SECURITYCENTER_MISCONFIGURATION
```


```
GCP_SECURITYCENTER_OBSERVATION
```


```
GCP_SECURITYCENTER_POSTURE_VIOLATION
```


```
GCP_SECURITYCENTER_THREAT
```


```
GCP_SECURITYCENTER_TOXIC_COMBINATION
```


```
GCP_SECURITYCENTER_UNSPECIFIED
```


```
GCP_SECURITYCENTER_VULNERABILITY
```


```
SENTINELONE_CF
```


```
SERVICENOW_SECURITY
```


```
SOURCEFIRE_IDS
```


```
SURICATA_EVE
```


```
SEP
```


```
SYSDIG
```


```
TRENDMICRO_DEEP_SECURITY
```


```
TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES
```


```
UBIQUITI_SWITCH
```


```
NIX_SYSTEM
```


```
UPWIND
```


```
VMWARE_ESX
```


```
VMWARE_VSPHERE
```


```
WINDOWS_DNS
```


```
WINEVTLOG
```


```
WIZ_IO
```


```
WORKDAY_USER_ACTIVITY
```


```
WORKSPACE_ACTIVITY
```


```
ZSCALER_WEBPROXY
```


```
ZSCALER_CASB
```


```
ZSCALER_DLP
```


```
ZSCALER_ZPA
```

The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.

```
log_type
```

- Azure Software Vulnerabilities (AZURE_SOFTWARE_VULNERABILITIES)
- Caller Verify (CALLER_VERIFY)
- CertSecure Log (CERTSECURE_LOG)
- Cisco MultiCloud Defense Firewall (CISCO_MULTICLOUD_DEFENSE_FIREWALL)
- Cursor (CURSOR)
- Cyfirma (CYFIRMA_DECYFIR_LOG)
- Databahn (DATABAHN)
- Flare Darkweb Alerts (FLARE_DARKWEB_ALERTS)
- Fortinet FortiAppSec Cloud (FORTINET_FORTIAPPSEC)
- Hikvision Network Video Recorders (HIKVISION_NVR)
- IBM B2B Integrator (IBM_B2B_INTEGRATOR)
- IBM InfoSphere Virtual Data Pipeline (IBM_VDP)
- Imperva Account TakeOver (IMPERVA_ATO)
- Imperva Client Side Protection (IMPERVA_CSP)
- Imperva DNS (IMPERVA_DNS)
- Imperva Network Security (IMPERVA_NETWORK_SECURITY)
- Microsoft Defender XDR (MICROSOFT_DEFENDER_XDR)
- Nakivo Backup and Recovery (NAKIVO_BACKUP)
- Netcraft Takedown (NETCRAFT_TAKEDOWN)
- Next Level Performance Amplify (NXL_AMPLIFY)
- Siemens Desigo (SIEMENS_DESIGO)

```
AZURE_SOFTWARE_VULNERABILITIES
```


```
CALLER_VERIFY
```


```
CERTSECURE_LOG
```


```
CISCO_MULTICLOUD_DEFENSE_FIREWALL
```


```
CURSOR
```


```
CYFIRMA_DECYFIR_LOG
```


```
DATABAHN
```


```
FLARE_DARKWEB_ALERTS
```

```
FORTINET_FORTIAPPSEC
```


```
HIKVISION_NVR
```


```
IBM_B2B_INTEGRATOR
```


```
IBM_VDP
```


```
IMPERVA_ATO
```


```
IMPERVA_CSP
```


```
IMPERVA_DNS
```


```
IMPERVA_NETWORK_SECURITY
```


```
MICROSOFT_DEFENDER_XDR
```


```
NAKIVO_BACKUP
```


```
NETCRAFT_TAKEDOWN
```


```
NXL_AMPLIFY
```


```
SIEMENS_DESIGO
```

Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.

```
log_type
```

- 1Password Audit Events (ONEPASSWORD_AUDIT_EVENTS)
- AIX system (AIX_SYSTEM)
- Apache (APACHE)
- Aruba EdgeConnect SD-WAN (ARUBA_EDGECONNECT_SDWAN)
- Avaya Aura Experience Portal (AVAYA_AURA)
- AWS CloudFront (AWS_CLOUDFRONT)
- AWS Cloudtrail (AWS_CLOUDTRAIL)
- AWS GuardDuty (GUARDDUTY)
- AWS Security Hub (AWS_SECURITY_HUB)
- Azure AD (AZURE_AD)
- Azure AD Organizational Context (AZURE_AD_CONTEXT)
- Azure AD Sign-In (AZURE_AD_SIGNIN)
- Azure SQL (AZURE_SQL)
- Azure Storage Audit (AZURE_STORAGE_AUDIT)
- Barracuda WAF (BARRACUDA_WAF)
- Blue Coat Proxy (BLUECOAT_WEBPROXY)
- Chrome Management (CHROME_MANAGEMENT)
- Cisco ACS (CISCO_ACS)
- Cisco ISE (CISCO_ISE)
- Cisco Secure Access (CISCO_SECURE_ACCESS)
- Cisco Secure Workload (CISCO_SECURE_WORKLOAD)
- Cisco Switch (CISCO_SWITCH)
- Cisco Umbrella Audit (CISCO_UMBRELLA_AUDIT)
- Citrix Netscaler (CITRIX_NETSCALER)
- Claroty Xdome (CLAROTY_XDOME)
- Claude Compliance Logs (CLAUDE_COMPLIANCE_LOGS)
- Cloudflare (CLOUDFLARE)
- Cloudflare Warp (CLOUDFLARE_WARP)
- Corelight (CORELIGHT)
- CrowdStrike Alerts API (CS_ALERTS)
- CrowdStrike Falcon (CS_EDR)
- CyberArk (CYBERARK)
- CyberArk Privileged Access Manager (PAM) (CYBERARK_PAM)
- Duo Administrator Logs (DUO_ADMIN)
- EfficientIP DDI (EFFICIENTIP_DDI)
- Elastic Audit Beats (ELASTIC_AUDITBEAT)
- Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
- F5 ASM (F5_ASM)
- Forcepoint Proxy (FORCEPOINT_WEBPROXY)
- FortiGate (FORTINET_FIREWALL)
- GitHub (GITHUB)
- Google Cloud Asset Inventory (GCP_CLOUD_ASSET_INVENTORY)
- Google Cloud Audit (GCP_CLOUDAUDIT)
- Google Compute Context (GCP_COMPUTE_CONTEXT)
- Google Threat Intelligence IOC (GTI_IOC)
- GTB Technologies DLP (GTB_DLP)
- HP Aruba (ClearPass) (CLEARPASS)
- IBM Websphere Application Server (IBM_WEBSPHERE_APP_SERVER)
- IBM z/OS (IBM_ZOS)
- Imperva (IMPERVA_WAF)
- Imperva CEF (IMPERVA_CEF)
- Imperva DRA (IMPERVA_DRA)
- Imperva SecureSphere Management (IMPERVA_SECURESPHERE)
- Island Browser logs (ISLAND_BROWSER)
- Juniper (JUNIPER_FIREWALL)
- Juniper Mist (JUNIPER_MIST)
- Kubernetes Node (KUBERNETES_NODE)
- LastPass Password Management (LASTPASS)
- Linux Auditing System (AuditD) (AUDITD)
- Microsoft Azure Activity (AZURE_ACTIVITY)
- Microsoft Defender for Office 365 (MICROSOFT_DEFENDER_MAIL)
- Microsoft IIS (IIS)
- Mobileiron (MOBILEIRON)
- Mongo Database (MONGO_DB)
- MySQL (MYSQL)
- Netapp Storagegrid (NETAPP_STORAGEGRID)
- Netskope V2 (NETSKOPE_ALERT_V2)
- Netskope Web Proxy (NETSKOPE_WEBPROXY)
- NGFW Enterprise (GCP_NGFW_ENTERPRISE)
- Office 365 (OFFICE_365)
- Office 365 Message Trace (OFFICE_365_MESSAGETRACE)
- Okta Scaleft (OKTA_SCALEFT)
- Oracle (ORACLE_DB)
- Oracle Cloud Infrastructure Audit Logs (OCI_AUDIT)
- Orca Cloud Security Platform (ORCA)
- Proofpoint On Demand (PROOFPOINT_ON_DEMAND)
- Radware Web Application Firewall (RADWARE_FIREWALL)
- Red Hat Directory Server LDAP (REDHAT_DIRECTORY_SERVER)
- Red Hat OpenShift (REDHAT_OPENSHIFT)
- Salesforce (SALESFORCE)
- Sangfor Next Generation Firewall (SANGFOR_NGAF)
- Security Command Center Error (GCP_SECURITYCENTER_ERROR)
- Security Command Center Misconfiguration (GCP_SECURITYCENTER_MISCONFIGURATION)
- Security Command Center Observation (GCP_SECURITYCENTER_OBSERVATION)
- Security Command Center Posture Violation (GCP_SECURITYCENTER_POSTURE_VIOLATION)
- Security Command Center Threat (GCP_SECURITYCENTER_THREAT)
- Security Command Center Toxic Combination (GCP_SECURITYCENTER_TOXIC_COMBINATION)
- Security Command Center Unspecified (GCP_SECURITYCENTER_UNSPECIFIED)
- Security Command Center Vulnerability (GCP_SECURITYCENTER_VULNERABILITY)
- SentinelOne Singularity Cloud Funnel (SENTINELONE_CF)
- ServiceNow Security (SERVICENOW_SECURITY)
- Sourcefire (SOURCEFIRE_IDS)
- Suricata EVE (SURICATA_EVE)
- Symantec Endpoint Protection (SEP)
- Sysdig (SYSDIG)
- Trend Micro Deep Security (TRENDMICRO_DEEP_SECURITY)
- Trend Micro Vision One Observerd Attack Techniques (TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES)
- Ubiquiti UniFi Switch (UBIQUITI_SWITCH)
- Unix system (NIX_SYSTEM)
- Upwind (UPWIND)
- VMware ESXi (VMWARE_ESX)

- VMWare VSphere (VMWARE_VSPHERE)
- Windows DNS (WINDOWS_DNS)
- Windows Event (WINEVTLOG)
- Wiz.io (WIZ_IO)
- Workday User Activity (WORKDAY_USER_ACTIVITY)
- Workspace Activities (WORKSPACE_ACTIVITY)
- Zscaler (ZSCALER_WEBPROXY)
- Zscaler CASB (ZSCALER_CASB)
- Zscaler DLP (ZSCALER_DLP)
- Zscaler Private Access (ZSCALER_ZPA)

```
ONEPASSWORD_AUDIT_EVENTS
```


```
AIX_SYSTEM
```


```
APACHE
```


```
ARUBA_EDGECONNECT_SDWAN
```


```
AVAYA_AURA
```


```
AWS_CLOUDFRONT
```


```
AWS_CLOUDTRAIL
```


```
GUARDDUTY
```


```
AWS_SECURITY_HUB
```


```
AZURE_AD
```


```
AZURE_AD_CONTEXT
```


```
AZURE_AD_SIGNIN
```


```
AZURE_SQL
```


```
AZURE_STORAGE_AUDIT
```


```
BARRACUDA_WAF
```


```
BLUECOAT_WEBPROXY
```


```
CHROME_MANAGEMENT
```


```
CISCO_ACS
```


```
CISCO_ISE
```


```
CISCO_SECURE_ACCESS
```


```
CISCO_SECURE_WORKLOAD
```


```
CISCO_SWITCH
```


```
CISCO_UMBRELLA_AUDIT
```


```
CITRIX_NETSCALER
```


```
CLAROTY_XDOME
```


```
CLAUDE_COMPLIANCE_LOGS
```


```
CLOUDFLARE
```


```
CLOUDFLARE_WARP
```


```
CORELIGHT
```


```
CS_ALERTS
```


```
CS_EDR
```


```
CYBERARK
```


```
CYBERARK_PAM
```


```
DUO_ADMIN
```


```
EFFICIENTIP_DDI
```


```
ELASTIC_AUDITBEAT
```


```
ELASTIC_WINLOGBEAT
```


```
F5_ASM
```


```
FORCEPOINT_WEBPROXY
```


```
FORTINET_FIREWALL
```


```
GITHUB
```


```
GCP_CLOUD_ASSET_INVENTORY
```


```
GCP_CLOUDAUDIT
```


```
GCP_COMPUTE_CONTEXT
```


```
GTI_IOC
```


```
GTB_DLP
```


```
CLEARPASS
```


```
IBM_WEBSPHERE_APP_SERVER
```


```
IBM_ZOS
```


```
IMPERVA_WAF
```


```
IMPERVA_CEF
```


```
IMPERVA_DRA
```


```
IMPERVA_SECURESPHERE
```


```
ISLAND_BROWSER
```


```
JUNIPER_FIREWALL
```


```
JUNIPER_MIST
```


```
KUBERNETES_NODE
```


```
LASTPASS
```


```
AUDITD
```


```
AZURE_ACTIVITY
```


```
MICROSOFT_DEFENDER_MAIL
```


```
IIS
```


```
MOBILEIRON
```


```
MONGO_DB
```


```
MYSQL
```


```
NETAPP_STORAGEGRID
```


```
NETSKOPE_ALERT_V2
```


```
NETSKOPE_WEBPROXY
```


```
GCP_NGFW_ENTERPRISE
```


```
OFFICE_365
```


```
OFFICE_365_MESSAGETRACE
```


```
OKTA_SCALEFT
```


```
ORACLE_DB
```


```
OCI_AUDIT
```


```
ORCA
```


```
PROOFPOINT_ON_DEMAND
```


```
RADWARE_FIREWALL
```


```
REDHAT_DIRECTORY_SERVER
```


```
REDHAT_OPENSHIFT
```


```
SALESFORCE
```


```
SANGFOR_NGAF
```


```
GCP_SECURITYCENTER_ERROR
```


```
GCP_SECURITYCENTER_MISCONFIGURATION
```


```
GCP_SECURITYCENTER_OBSERVATION
```


```
GCP_SECURITYCENTER_POSTURE_VIOLATION
```


```
GCP_SECURITYCENTER_THREAT
```


```
GCP_SECURITYCENTER_TOXIC_COMBINATION
```


```
GCP_SECURITYCENTER_UNSPECIFIED
```


```
GCP_SECURITYCENTER_VULNERABILITY
```


```
SENTINELONE_CF
```


```
SERVICENOW_SECURITY
```


```
SOURCEFIRE_IDS
```


```
SURICATA_EVE
```


```
SEP
```


```
SYSDIG
```


```
TRENDMICRO_DEEP_SECURITY
```


```
TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES
```


```
UBIQUITI_SWITCH
```


```
NIX_SYSTEM
```


```
UPWIND
```


```
VMWARE_ESX
```


```
VMWARE_VSPHERE
```


```
WINDOWS_DNS
```


```
WINEVTLOG
```


```
WIZ_IO
```


```
WORKDAY_USER_ACTIVITY
```


```
WORKSPACE_ACTIVITY
```


```
ZSCALER_WEBPROXY
```


```
ZSCALER_CASB
```


```
ZSCALER_DLP
```


```
ZSCALER_ZPA
```

The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.

```
log_type
```

- Azure Software Vulnerabilities (AZURE_SOFTWARE_VULNERABILITIES)
- Caller Verify (CALLER_VERIFY)
- CertSecure Log (CERTSECURE_LOG)
- Cisco MultiCloud Defense Firewall (CISCO_MULTICLOUD_DEFENSE_FIREWALL)
- Cursor (CURSOR)
- Cyfirma (CYFIRMA_DECYFIR_LOG)
- Databahn (DATABAHN)
- Flare Darkweb Alerts (FLARE_DARKWEB_ALERTS)
- Fortinet FortiAppSec Cloud (FORTINET_FORTIAPPSEC)
- Hikvision Network Video Recorders (HIKVISION_NVR)
- IBM B2B Integrator (IBM_B2B_INTEGRATOR)
- IBM InfoSphere Virtual Data Pipeline (IBM_VDP)
- Imperva Account TakeOver (IMPERVA_ATO)
- Imperva Client Side Protection (IMPERVA_CSP)
- Imperva DNS (IMPERVA_DNS)
- Imperva Network Security (IMPERVA_NETWORK_SECURITY)
- Microsoft Defender XDR (MICROSOFT_DEFENDER_XDR)
- Nakivo Backup and Recovery (NAKIVO_BACKUP)
- Netcraft Takedown (NETCRAFT_TAKEDOWN)
- Next Level Performance Amplify (NXL_AMPLIFY)
- Siemens Desigo (SIEMENS_DESIGO)

```
AZURE_SOFTWARE_VULNERABILITIES
```


```
CALLER_VERIFY
```


```
CERTSECURE_LOG
```


```
CISCO_MULTICLOUD_DEFENSE_FIREWALL
```


```
CURSOR
```


```
CYFIRMA_DECYFIR_LOG
```


```
DATABAHN
```


```
FLARE_DARKWEB_ALERTS
```

```
FORTINET_FORTIAPPSEC
```


```
HIKVISION_NVR
```


```
IBM_B2B_INTEGRATOR
```


```
IBM_VDP
```


```
IMPERVA_ATO
```


```
IMPERVA_CSP
```


```
IMPERVA_DNS
```


```
IMPERVA_NETWORK_SECURITY
```


```
MICROSOFT_DEFENDER_XDR
```


```
NAKIVO_BACKUP
```


```
NETCRAFT_TAKEDOWN
```


```
NXL_AMPLIFY
```


```
SIEMENS_DESIGO
```

### Announcement
Release 6.3.87 is being rolled out to the first phase of regions as listed [here](https://docs.cloud.google.com/chronicle/docs/soar/overview-and-introduction/soar-gradual-release).
This release contains internal and customer bug fixes.

### v1.15.4
On May 30, 2026 we released an updated version of the Apigee hybrid software, v1.15.4.
- For information on upgrading, see [Upgrading Apigee hybrid to version v1.15.4](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/upgrade).
- For information on new installations, see [The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/big-picture).
[Upgrading Apigee hybrid to version v1.15.4](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/upgrade)
[The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/big-picture)
[Apigee release process](https://docs.cloud.google.com/apigee/docs/release/apigee-release-process#apigee-hybrid-container-images)

### Security
Various security and CVE fixes are included in this release.

### Announcement
[Release 6.3.86](https://docs.cloud.google.com/chronicle/docs/soar/release-notes#May_24_2026) is now available for all regions.

### Announcement
On May 29, 2026, we released an updated version of the Apigee UI.

### Feature
Apigee EventFlow now supports the DataCapture policy
You can now use the DataCapture policy within an EventFlow to extract and persist data from server-sent events (SSE) streams, such as token counts and other fields from streaming LLM responses. For more information, see [Use the DataCapture policy to capture token counts](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events#datacapture-token-counts).

### Feature
Manage Spaces in the Apigee UI
You can now create, view, update, and delete spaces, and manage their Identity and Access Management (IAM) policies directly in the Apigee UI. Previously, these actions could only be performed using the Apigee API. For more information, see [Apigee Spaces overview](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).

### Announcement
The [preconfigured base images](https://docs.cloud.google.com/workstations/docs/preconfigured-base-images) include [Antigravity CLI](https://antigravity.google/product/antigravity-cli).

### Announcement
The base VM was upgraded to use [Container-Optimized OS](https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits) [129 LTS](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m129).

### Feature
The [JetBrains RubyMine preconfigured base image](https://docs.cloud.google.com/workstations/docs/preconfigured-base-images#list_of_preconfigured_base_images) uses a custom gem directory (/usr/local/share/gems/ruby/3.1.0).

```
/usr/local/share/gems/ruby/3.1.0
```

Various bug fixes and minor product enhancements.

### Issue
In GKE version 1.35 and later, workloads that use Workload Identity to [authenticate to Google Cloud APIs](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity) might experience transient connectivity timeouts or refused connections to the GKE metadata server immediately following node startup. For recommendations and workarounds, see [Timeout errors at Pod startup](https://docs.cloud.google.com/kubernetes-engine/docs/troubleshooting/authentication#troubleshoot-timeout).

### Feature
GKE Gateway now supports backend authenticated TLS for Gateway-originated connections to Pods or InferencePools for the following GatewayClasses:
- gke-l7-global-external-managed
- gke-l7-regional-external-managed
- gke-l7-rilb

```
gke-l7-global-external-managed
```


```
gke-l7-regional-external-managed
```


```
gke-l7-rilb
```

The Data Lineage API includes the [searchLineageStreaming](https://cloud.google.com/feeds/dataplex/docs/reference/data-lineage/rest/v1/projects.locations/searchLineageStreaming?rep_location=global) method that performs a breadth-first search (upstream or downstream) to retrieve lineage links for an asset identified by its Fully Qualified Name (FQN).

```
searchLineageStreaming
```

For more information, see the Data Lineage API reference for [REST](https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest).

### Announcement
Managed Service for Apache Spark (formerly Dataproc on Compute Engine): Added support for selecting specific [Confidential Computing](https://docs.cloud.google.com/managed-spark/docs/concepts/configuring-clusters/confidential-compute) technologies (AMD SEV, AMD SEV-SNP, Intel TDX) when creating clusters using the new --confidential-compute-type flag in gcloud and the confidentialInstanceType field in the API. The boolean --enable-confidential-compute flag is now deprecated but will continue to function, defaulting to AMD SEV for backward compatibility.

```
--confidential-compute-type
```


```
gcloud
```


```
confidentialInstanceType
```


```
--enable-confidential-compute
```

- Introduced confidentialInstanceType enum in the [API](https://docs.cloud.google.com/managed-spark/docs/reference/rest/v1/ClusterConfig#confidentialinstanceconfig).
- The --enable-confidential-compute flag and enableConfidentialCompute field are deprecated in favor of the new type-specific flag/field.
- Clusters created with the deprecated boolean flag will default to SEV.
- Added validation for machine type compatibility for SEV, SEV-SNP, and TDX.
- Updated live migration logic to support compatible machine types and CPU platforms for each technology, including N2D and C3D for SEV.

```
confidentialInstanceType
```

[API](https://docs.cloud.google.com/managed-spark/docs/reference/rest/v1/ClusterConfig#confidentialinstanceconfig)

```
--enable-confidential-compute
```


```
enableConfidentialCompute
```


```
SEV
```


```
SEV
```


```
SEV-SNP
```


```
TDX
```

### Feature
You can now view the Google Cloud Backup and DR Service protection summary at the organization and folder levels. To learn more about protection summary, see [Find unprotected resources using protection summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary).

As part of Bigtable Enterprise Plus [edition](https://docs.cloud.google.com/bigtable/docs/editions-overview), you can configure a retention period of up to 365 days for backups. This feature is [generally available (GA)](https://cloud.google.com/products#product-launch-stages). For more information, see [Bigtable backups overview](https://docs.cloud.google.com/bigtable/docs/backups).

You can view the available regional endpoints for the Cloud Logging API on the REST reference pages. For an example, see [Method: projects.locations.buckets.list](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/projects.locations.buckets/list?rep_location=global).

As of August 26, 2026, in buckets with hierarchical namespace enabled, the [Object Lifecycle Management](https://docs.cloud.google.com/storage/docs/lifecycle) Delete action will delete empty folders when the empty folder meets all of the conditions in the lifecycle rule.

```
Delete
```

You can view the available regional endpoints for the Observability API and for the Telemetry API on their REST reference pages. For more information, see [API overview](https://docs.cloud.google.com/stackdriver/docs/reference/api-overview).

You can view the available regional endpoints for the Error Reporting API on the REST reference pages. For an example, see [Method: projects.events.list](https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/list?rep_location=global).

Gemini Enterprise: Release of Core Assistant (General Availability) and new Trace and Metrics information for Core Assistant (Preview)
This release includes Core Assistant, a Google-provided ("Made by Google") root agent that handles interactions when users talk to the Gemini Enterprise app without specifying any other agent.
Core Assistant is [Generally Available](https://cloud.google.com/products#product-launch-stages).
Core Assistant includes new observability and monitoring functionality:
- Traces: A chronological summary and visualization of trace spans showing execution flow, duration, inputs, outputs, and precise details if OpenTelemetry trace and logging instrumentation is enabled.
- Metrics: A default-on dashboard displaying session counts, latency, agent invocations, tool call counts, and error rates without any extra billing costs.
The Trace and Metrics tabs are in [Public Preview](https://cloud.google.com/products#product-launch-stages).
For more information, see [Observe and trace agent behavior with Core Assistant](https://docs.cloud.google.com/gemini/enterprise/docs/core-assistant).

### Feature
Agent Platform Gemini 3.1 Flash Image and Gemini 3 Pro Image
Gemini Enterprise Agent Platform Gemini 3.1 Flash Image and Gemini 3 Pro Image are [Generally Available](https://cloud.google.com/products#product-launch-stages).
With this release, Gemini 3.1 Flash Image and Gemini 3 Pro Image support 4K image outputs in [Preview](https://cloud.google.com/products#product-launch-stages).
Also supported in this release, Gemini 3.1 Flash Image supports video inputs in [Preview](https://cloud.google.com/products#product-launch-stages). You can use video inputs to generate thumbnails or representative images of videos.
For more information, see the following:
- [Gemini 3.1 Flash Image (Nano Banana
2)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-image)
- [Gemini 3 Pro Image (Nano Banana
Pro)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-pro-image)
[Gemini 3.1 Flash Image (Nano Banana
2)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-image)
[Gemini 3 Pro Image (Nano Banana
Pro)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-pro-image)

### Deprecated
Agent Platform Gemini 3.1 Flash Image Preview and Gemini 3 Pro Image Preview deprecation
Gemini Enterprise Agent Platform Gemini 3.1 Flash Image Preview and Gemini 3 Pro Image Preview are deprecated. We recommend that you update your model endpoints before July 17, 2026, to avoid service disruption.
The following are the discontinued endpoints and recommended endpoint migration:

```
gemini-3.1-flash-image-preview
```


```
gemini-3.1-flash-image
```


```
gemini-3-pro-image-preview
```


```
gemini-3-pro-image
```

### Feature
Anthropic's Claude Opus 4.8
[Claude Opus 4.8](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/opus-4-8) is available in Model Garden.

### Feature
C4A bare metal instances are generally available with GKE clusters. For more information, see the [Arm workloads on GKE](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/arm-on-gke) document, including the "Requirements and limitations" section for specific version requirements.

### Feature
[Confidential GKE Nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes#confidential-gke-nodes) now support cluster level enablement of [AMD SEV-SNP](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/confidential-vm-overview#amd_sev-snp) and [Intel TDX](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/confidential-vm-overview#intel_tdx) on GKE Autopilot.

### Feature
In GKE versions 1.36.0-gke.2459000 and later, you can directly configure Cloud Logging for L4 load balancer backend services by using the L4LBConfig CustomResourceDefinition (CRD).
This feature is available for the following load balancer types:
- [Internal L4 load
balancers](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/internal-load-balancing#enable-logging)
with subsetting enabled.
- [External L4 load
balancers](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/backend-service-based-external-load-balancer#enable-logging)
with regional backend services (RBS) enabled.
[Internal L4 load
balancers](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/internal-load-balancing#enable-logging)
[External L4 load
balancers](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/backend-service-based-external-load-balancer#enable-logging)

[Spotlight Feature] Unified and Upgraded Chronicle API
[Chronicle API](https://docs.cloud.google.com/chronicle/docs/reference/rest) has been unified with API resources from [legacy SOAR API](https://docs.cloud.google.com/chronicle/docs/soar/reference/working-with-chronicle-soar-apis). Further, we've upgraded the following Chronicle API resources from v1 beta to v1. This upgrade signals API stability and functional completeness, enabling customer and partner adoption for production usage. We recommend that customers and partners use Chronicle API for a more robust, secure, and extensible experience. Learn more about [API Stability](https://google.aip.dev/181).
The following features and resources are included in this update:
[Threat Collection](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.threatCollections)
[IoC](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.iocs)
[CoverageDetail](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.coverageDetails)
[EntityRisk](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/getRiskConfig)
[NativeDashboard](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.nativeDashboards)
[DashboardChart](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dashboardCharts)
[DashboardQuery](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dashboardQueries)
[FeaturedContentNativeDashboard](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.featuredContentNativeDashboards)
[DataTable](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTables)
[DataTableRow](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTables.dataTableRows)
[DataTableOperationError](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTableOperationErrors)
[Logs](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes.logs)
[Feed](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feeds)
[LogTypeSchema](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedSourceTypeSchemas.logTypeSchemas)
[FeedSourceSchema](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedSourceTypeSchemas)
[FeedPack](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedPacks)
[Forwarder](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.forwarders)
[Logtype](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes)
[Parser](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes.parsers)
[IngestionLogLabel](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ingestionLogLabels)
[FindingsRefinement](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.findingsRefinements)
[VerifyRuleText](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/verifyRuleText)
[FeaturedContentRule](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.featuredContentRules)
[RuleExecutionError](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ruleExecutionErrors)
[Event](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.events)
[Entity](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.entities)
[SearchQuery](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.users.searchQueries)
[SavedColumnSet](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.savedColumnSets)
[BigQueryExportService](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.bigQueryExport)

[EnrichmentControl](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.enrichmentControls)
[EnrichmentCombination](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/getEnrichmentCombination)
[Case](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases)
[CaseAlert](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseAlerts)
[CaseStageDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseStageDefinitions)
[CaseTagDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseTagDefinitions)
[CaseQueueFilter](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseQueueFilters)
[CaseCloseDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseCloseDefinitions)
[ContextProperty](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseAlerts.contextProperties)
[InvolvedEntity](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseAlerts.involvedEntities)
[Task](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.tasks)
[CaseComment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseComments)
[CaseWallRecord](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseWallRecords)
[ChatMessage](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.chatMessages)
[View](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.views)
[VisualFamily](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ontologyRecords.visualFamilies)
[ChatMessages.attachment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.chatMessages.attachments)
[ContentPack](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.contentPacks)
[SocRole](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.socRoles)
[EmailTemplate](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.emailTemplates)
[DynamicParameter](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dynamicParameters)
[EntitiesBlocklist](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.entitiesBlocklists)
[Environment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.environments)
[EnvironmentGroup](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.environmentGroups)
[Integration](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations)
[Integrationaction](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.actions)
[UserNotification](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.userNotifications)
[Integrationactionrevision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.actions.revisions)
[Connector](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors)
[ConnectorInstance](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors.connectorInstances)
[RemoteAgent](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.remoteAgents)
[Connectorlog](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors.connectorInstances.logs)
[Connectorrevision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors.revisions)
[IntegrationInstance](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.integrationInstances)

### Feature
[UniqueEntity](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.uniqueEntities)
[Integrationsjob](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs)
[JobInstance](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs.jobInstances)
[JobInstances.log](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs.jobInstances.logs)
[Jobs.revision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs.revisions)
[Integrationmanager](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.managers)
[Integrationmanagerrevision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.managers.revisions)
[AlertGroupingRule](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.alertGroupingRules)
[Announcement](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.announcements)
[Attachment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.attachments)
[CustomList](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.customLists)
[FormDynamicParameter](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.formDynamicParameters)
[MarketplaceIntegration](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.marketplaceIntegrations)
[ModuleSetting](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.moduleSettings)
[SlaDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.slaDefinitions)
[NotificationSetting](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers/getNotificationSettings)
[PropertySchemaDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.propertySchemaDefinitions)
[RequestTemplate](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.requestTemplates)
[SoarDomain](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.soarDomains)
[SoarNetwork](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.soarNetworks)
[WorkdeskLink](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.workdeskLinks)
[SystemNotification](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.systemNotifications)
[WorkdeskContact](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.workdeskContacts)
[WorkdeskNote](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.workdeskNotes)
[LegacySoarUsers.localization](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers/getLocalization)
For a full list of updated resources and links to the documentation, please see the [Chronicle API documentation](https://docs.cloud.google.com/chronicle/docs/reference/rest).

### Feature
[Spotlight Feature] Manage access to preview features
Google Sec0ps tenant administrators can enable or disable access to public preview features. Previously, all public preview features needed to be enabled through official Support channels.
The new Public Preview Features page lists all the public preview features, the status of each feature (on or off)—along with (when available) the expected GA date and a link to a relevant user guide.
[compliance-controlled tenants](https://docs.cloud.google.com/chronicle/docs/onboard#set-up-assured-workloads-folder)
For more information, see [Manage access to preview features](https://docs.cloud.google.com/chronicle/docs/secops/preview-features-manage).

Upgraded Chronicle API
We've upgraded the following [Chronicle API](https://docs.cloud.google.com/chronicle/docs/reference/rest) resources from v1 beta to v1. This upgrade signals API stability and functional completeness, enabling customer and partner adoption for production usage. We recommend that customers and partners use Chronicle API for all new integrations, for a more robust, secure, and extensible experience. Learn more about [API Stability](https://google.aip.dev/181).
The following features and resources are included in this update:
- Alerts and ATIs, UEBA: [Threat Collection](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.threatCollections), [IoC](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.iocs), [CoverageDetail](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.coverageDetails), [EntityRisk](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/getRiskConfig)
- Dashboards: [NativeDashboard](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.nativeDashboards), [DashboardChart](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dashboardCharts), [DashboardQuery](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dashboardQueries), [FeaturedContentNativeDashboard](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.featuredContentNativeDashboards)
- Data Tables: [DataTable](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTables), [DataTableRow](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTables.dataTableRows), [DataTableOperationError](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTableOperationErrors)
- Ingestion: [Logs](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes.logs), [Feed](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feeds), [LogTypeSchema](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedSourceTypeSchemas.logTypeSchemas), [FeedSourceSchema](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedSourceTypeSchemas), [FeedPack](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedPacks), [Forwarder](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.forwarders)
- Normalization: [Logtype](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes), [Parser](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes.parsers), [IngestionLogLabel](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ingestionLogLabels)
- Detections: [FindingsRefinement](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.findingsRefinements), [VerifyRuleText](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/verifyRuleText), [FeaturedContentRule](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.featuredContentRules), [RuleExecutionError](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ruleExecutionErrors)
- Search & Investigation: [Event](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.events), [Entity](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.entities), [SearchQuery](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.users.searchQueries), [SavedColumnSet](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.savedColumnSets)
- Exports: [BigQueryExportService](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.bigQueryExport)

- Enrichment Controls: [EnrichmentControl](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.enrichmentControls), [EnrichmentCombination](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/getEnrichmentCombination)
[Threat Collection](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.threatCollections)
[IoC](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.iocs)
[CoverageDetail](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.coverageDetails)
[EntityRisk](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/getRiskConfig)
[NativeDashboard](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.nativeDashboards)
[DashboardChart](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dashboardCharts)
[DashboardQuery](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dashboardQueries)
[FeaturedContentNativeDashboard](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.featuredContentNativeDashboards)
[DataTable](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTables)
[DataTableRow](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTables.dataTableRows)
[DataTableOperationError](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dataTableOperationErrors)
[Logs](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes.logs)
[Feed](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feeds)
[LogTypeSchema](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedSourceTypeSchemas.logTypeSchemas)
[FeedSourceSchema](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedSourceTypeSchemas)
[FeedPack](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.feedPacks)
[Forwarder](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.forwarders)
[Logtype](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes)
[Parser](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.logTypes.parsers)
[IngestionLogLabel](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ingestionLogLabels)
[FindingsRefinement](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.findingsRefinements)
[VerifyRuleText](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/verifyRuleText)
[FeaturedContentRule](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.featuredContentRules)
[RuleExecutionError](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ruleExecutionErrors)
[Event](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.events)
[Entity](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.entities)
[SearchQuery](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.users.searchQueries)
[SavedColumnSet](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.savedColumnSets)
[BigQueryExportService](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.bigQueryExport)
[EnrichmentControl](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.enrichmentControls)
[EnrichmentCombination](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances/getEnrichmentCombination)
For a full list of updated resources and links to the documentation, please see the [Chronicle API documentation](https://docs.cloud.google.com/chronicle/docs/reference/rest).

Unified and Upgraded Chronicle API
[Chronicle API](https://docs.cloud.google.com/chronicle/docs/reference/rest) has been unified with API resources from [legacy SOAR API](https://docs.cloud.google.com/chronicle/docs/soar/reference/working-with-chronicle-soar-apis). This unification provides a more robust, secure, and extensible experience. This upgrade signals API stability and functional completeness, enabling customer and partner adoption for production usage. We recommend that customers and partners use Chronicle API for a more robust, secure, and extensible experience. Learn more about [API Stability](https://google.aip.dev/181).

This update includes the following resources: [Case](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases), [CaseAlert](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseAlerts), [CaseStageDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseStageDefinitions), [CaseTagDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseTagDefinitions), [CaseQueueFilter](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseQueueFilters), [CaseCloseDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.caseCloseDefinitions), [ContextProperty](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseAlerts.contextProperties), [InvolvedEntity](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseAlerts.involvedEntities), [Task](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.tasks), [CaseComment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseComments), [CaseWallRecord](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.caseWallRecords), [ChatMessage](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.chatMessages), [View](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.views), [VisualFamily](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.ontologyRecords.visualFamilies), [ChatMessages.attachment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.cases.chatMessages.attachments), [ContentPack](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.contentHub.contentPacks), [SocRole](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.socRoles), [EmailTemplate](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.emailTemplates), [DynamicParameter](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.dynamicParameters), [EntitiesBlocklist](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.entitiesBlocklists), [Environment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.environments), [EnvironmentGroup](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.environmentGroups), [Integration](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations), [Integrationaction](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.actions), [UserNotification](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.userNotifications), [Integrationactionrevision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.actions.revisions), [Connector](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors), [ConnectorInstance](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors.connectorInstances), [RemoteAgent](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.remoteAgents), [Connectorlog](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors.connectorInstances.logs), [Connectorrevision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.connectors.revisions), [IntegrationInstance](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.integrationInstances), [UniqueEntity](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.uniqueEntities), [Integrationsjob](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs), [JobInstance](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs.jobInstances), [JobInstances.log](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs.jobInstances.logs), [Jobs.revision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.jobs.revisions), [Integrationmanager](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.managers), [Integrationmanagerrevision](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.integrations.managers.revisions), [AlertGroupingRule](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.alertGroupingRules), [Announcement](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.announcements), [Attachment](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.attachments), [CustomList](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.customLists), [FormDynamicParameter](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.formDynamicParameters), [MarketplaceIntegration](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.marketplaceIntegrations), [ModuleSetting](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.moduleSettings), [SlaDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.slaDefinitions), [NotificationSetting](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers/getNotificationSettings), [PropertySchemaDefinition](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.propertySchemaDefinitions), [RequestTemplate](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.requestTemplates), [SoarDomain](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.soarDomains), [SoarNetwork](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.soarNetworks), [WorkdeskLink](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.workdeskLinks), [SystemNotification](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.systemNotifications), [WorkdeskContact](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.workdeskContacts), [WorkdeskNote](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers.workdeskNotes), [LegacySoarUsers.localization](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1/projects.locations.instances.legacySoarUsers/getLocalization).

For a full list of updated resources and links to the documentation, please see the [Chronicle API documentation](https://docs.cloud.google.com/chronicle/docs/reference/rest).

To enhance security and address potential vulnerabilities (such as GHSA-3m6q-h5gj-7mrw), the Secure Source Manager Git-over-SSH server configuration has removed support for several legacy and insecure SSH algorithms.
SSH clients must support one or more of the following modern algorithms to connect:
- Key Exchange Algorithms: curve25519-sha256, diffie-hellman-group14-sha256
- Ciphers: chacha20-poly1305@openssh.com, aes128-ctr, aes192-ctr,aes256-ctr, aes128-gcm@openssh.com, aes256-gcm@openssh.com
- MACs: hmac-sha2-256-etm@openssh.com, hmac-sha2-256

```
curve25519-sha256
```


```
diffie-hellman-group14-sha256
```


```
chacha20-poly1305@openssh.com
```


```
aes128-ctr
```


```
aes192-ctr,aes256-ctr
```


```
aes128-gcm@openssh.com
```


```
aes256-gcm@openssh.com
```


```
hmac-sha2-256-etm@openssh.com
```


```
hmac-sha2-256
```

Users with old or non-standard SSH clients lacking support for these algorithms will be unable to connect using SSH for Git operations. Ensure your SSH client is up-to-date.

### Feature
[Risk Engine](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features) detects toxic combinations that are related to Managed Service for Apache Spark (formerly known as Dataproc), including Lightning Engine.

### Feature
Risk reports are updated to include more content in the Risk Engine introduction and the System attack exposure pages. For more information about what's included in risk reports, see [Risk reports overview](https://docs.cloud.google.com/security-command-center/docs/risk-reports-overview).

### Feature
Enable only needed legacy bundled services using the [app_engine_bundled_services](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml?tab=go#app_engine_bundled_services) field for improved security and maintainability of your applications ([Preview](https://cloud.google.com/products/#product-launch-stages)).

```
app_engine_bundled_services
```

Enable only needed legacy bundled services using the [app_engine_bundled_services](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml#app_engine_apis) field for improved security and maintainability of your applications ([Preview](https://cloud.google.com/products/#product-launch-stages)).

```
app_engine_bundled_services
```

Enable only needed legacy bundled services using the [app_engine_bundled_services](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml?tab=php#app_engine_bundled_services) field for improved security and maintainability of your applications ([Preview](https://cloud.google.com/products/#product-launch-stages)).

```
app_engine_bundled_services
```

Enable only needed legacy bundled services using the [app_engine_bundled_services](https://docs.cloud.google.com/appengine/docs/standard/reference/app-yaml?tab=python#app_engine_bundled_services) field for improved security and maintainability of your applications ([Preview](https://cloud.google.com/products/#product-launch-stages)).

```
app_engine_bundled_services
```

An updated version of the [Simba ODBC driver for BigQuery](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers#current_odbc_driver) is now available.

Generally available: Two C4A bare metal machine types are generally available:
- c4a-standard-96-metal with 96 vCPUs and 384 GB of DDR5
memory
- c4a-highmem-96-metal with 96 vCPUs and 768 GB DDR5
memory

```
c4a-standard-96-metal
```


```
c4a-highmem-96-metal
```

These two machine types support Hyperdisk Balanced, Hyperdisk Extreme, Hyperdisk Throughput, and Hyperdisk ML volume storage and up to 100 Gbps of network bandwidth.
To learn more about the C4A machine family, read [General-purpose machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines#n4a_series). To see where you can create C4A bare metal instances, read [Bare metal instances](https://docs.cloud.google.com/compute/docs/instances/bare-metal-instances).

[Layout parser](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk) image and table annotations is in [General Availability (GA)](https://cloud.google.com/products/#product-launch-stages).
Layout parser can identify if there are images or tables in parsed documents. When found, images and tables are annotated as a descriptive block of text with the information depicted in the image and table.

Gemini Enterprise: Slack data store
The Slack data store is generally available (GA) in Gemini Enterprise.
You can connect a Slack Workspace to search and read conversations, files, and messages using natural language. You can also perform actions, such as sending and scheduling messages, directly from the Gemini Enterprise app chat box.
For more information, see [Connect Slack](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/slack).

User ID logging now included with agent logs when you opt in to "Enable logging of prompt inputs and response outputs"
Prompt input and response output logging now includes the user.id field. This addition allows better tracking of anomalous tool interactions.

```
user.id
```


```
user.id
```


```
user.id
```

For details on configuration, see [Write traces for an agent](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/runtime/tracing#write-traces).

### Announcement
Advanced reporting dashboards 4.22
We've released version 4.22 of the advanced reporting dashboards.

### Feature
Added a Location filter to dashboards
The following dashboards now include a Location filter:
- [Real-time Channel
Performance](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-real-time-channel-perf)
- [Transfers](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-transfers)
- [Queue
Interval](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-queue-interval)
[Real-time Channel Performance](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-real-time-channel-perf)
[Transfers](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-transfers)
[Queue Interval](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-queue-interval)

### Feature
Queue Performance dashboard improvements
We've made the following improvements to the Queue Performance - Calls and Queue Performance - Chats dashboards:
- Added the dashboards to the Advanced Reporting Landing Page.
- Added a Support Phone Number filter.
- Renamed the Total Inbound Handled tile (calls only) to Total Queue
Answered.
- Added a Total Failed tile.
- In the Queue Summary table, removed the Total Inbound Calls Handled
column and added the following columns: Total Queue Interactions,
Total Queue Entries, Total Queue Answered, Total Failed, and
Total Transfers.
Added the dashboards to the Advanced Reporting Landing Page.
Added a Support Phone Number filter.
Renamed the Total Inbound Handled tile (calls only) to Total Queue Answered.
Added a Total Failed tile.
In the Queue Summary table, removed the Total Inbound Calls Handled column and added the following columns: Total Queue Interactions, Total Queue Entries, Total Queue Answered, Total Failed, and Total Transfers.
For more information, see [Queue Performance dashboards](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-queue-performance).

### Feature
General dashboard updates
- In the [Performance
Overview](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-perf-overview)
dashboard, we renamed the following tiles:

Queued Now to Current Queued Now
Max Queue Time to Current Max Queue Time

- Queued Now to Current Queued Now
- Max Queue Time to Current Max Queue Time
- The [Real-time Connected -
Calls](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-calls-connected) and
[Real-time Connected -
Chats](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-chats-connected)
dashboards now include the following tiles:

Total Connected Calls (calls only)
Total Connected Chats (chats only)
Avg Current Sentiment Score

- Total Connected Calls (calls only)
- Total Connected Chats (chats only)
- Avg Current Sentiment Score
- In the [Queue Group Performance -
All](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-queue-group-perf)
dashboard, we renamed the Lang filter to Language.
In the [Performance Overview](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-perf-overview) dashboard, we renamed the following tiles:
- Queued Now to Current Queued Now
- Max Queue Time to Current Max Queue Time
Queued Now to Current Queued Now
Max Queue Time to Current Max Queue Time
The [Real-time Connected - Calls](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-calls-connected) and [Real-time Connected - Chats](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-chats-connected) dashboards now include the following tiles:
- Total Connected Calls (calls only)
- Total Connected Chats (chats only)
- Avg Current Sentiment Score
Total Connected Calls (calls only)
Total Connected Chats (chats only)
Avg Current Sentiment Score
In the [Queue Group Performance - All](https://docs.cloud.google.com/contact-center/ccai-platform/docs/dashboards-queue-group-perf) dashboard, we renamed the Lang filter to Language.

The following issues were addressed in this release:
- Fixed an issue where the CSAT scores in the Performance Overview and
CSAT dashboards didn't match.
- Fixed an issue where the Queue Performance dashboard incorrectly totaled
queue interactions, resulting in lower counts than expected.
- Fixed an issue in the All Interactions - Chat dashboard where the
Virtual Agents Chats table displayed the wrong chat.
- Fixed an issue in the All Interactions - Chat dashboard where the
Failed Interaction column of the Chat Metric Detail table displayed
False for a failed interaction.
- Fixed an issue in the All Interactions - Chat dashboard where the
Failed Interaction column of the Chat Metric Detail table displayed
False for a failed interaction.
- Fixed an issue where the Chat ID filter on the Queue Performance -
Chats dashboard incorrectly displayed placeholder values.
- Fixed an issue where scheduled exports of large queries were limited to 500
rows, causing reporting delays.
- Fixed an issue in the Historical Data table of the Agent Activity
dashboard where the Start Time and End Time columns indicated
incorrect durations for agents belonging to multiple teams.
- Fixed an issue where short abandoned calls and chats were incorrectly
included in the Abandons dashboard, causing inaccurate reporting of
queue abandon times.
- Fixed an issue where dashboard windows didn't fully display their contents.
Fixed an issue where the CSAT scores in the Performance Overview and CSAT dashboards didn't match.
Fixed an issue where the Queue Performance dashboard incorrectly totaled queue interactions, resulting in lower counts than expected.
Fixed an issue in the All Interactions - Chat dashboard where the Virtual Agents Chats table displayed the wrong chat.
Fixed an issue in the All Interactions - Chat dashboard where the Failed Interaction column of the Chat Metric Detail table displayed False for a failed interaction.

```
False
```

Fixed an issue in the All Interactions - Chat dashboard where the Failed Interaction column of the Chat Metric Detail table displayed False for a failed interaction.

```
False
```

Fixed an issue where the Chat ID filter on the Queue Performance - Chats dashboard incorrectly displayed placeholder values.
Fixed an issue where scheduled exports of large queries were limited to 500 rows, causing reporting delays.
Fixed an issue in the Historical Data table of the Agent Activity dashboard where the Start Time and End Time columns indicated incorrect durations for agents belonging to multiple teams.
Fixed an issue where short abandoned calls and chats were incorrectly included in the Abandons dashboard, causing inaccurate reporting of queue abandon times.
Fixed an issue where dashboard windows didn't fully display their contents.

We've reduced the processing and delivery delay for Google Cloud Marketplace partner reports from 2 days (D+2) to 1 day (D+1), accelerating by one day the delivery of the [Customer Insights reports](https://docs.cloud.google.com/marketplace/docs/partners/reports/report-customer-insight) to Cloud Marketplace partners.
For information about processing times, see [Customer Insights report frequency](https://docs.cloud.google.com/marketplace/docs/partners/reports/report-customer-insight#report_frequency)

### Announcement
Google Distributed Cloud (software only) for VMware 1.34.500-gke.108 is now available for download. To upgrade, see [Upgrade clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading.md). Google Distributed Cloud 1.34.500-gke.108 runs on Kubernetes v1.34.7-gke.200.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready storage partners document to make sure the storage vendor has already passed the qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become available for use with GKE On-Prem API clients: the Google Cloud console, the gcloud CLI, and Terraform.

### Fixed
The following issues were fixed in 1.34.500-gke.108:
- Fixed vulnerabilities listed in [Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/vulnerabilities).
- Fixed an issue where, when setting stackdriver.disableVsphereResourceMetrics to true in the cluster configuration file, user cluster installations or upgrades stalled indefinitely because the installer erroneously deleted the vsphere-ca-certificate ConfigMap, causing vsphere-csi-controller pods to fail with mount errors. You no longer need to manually recreate the ConfigMap or scale down the vsphere-metrics-exporter deployment as a workaround. 
- Fixed an issue where, when recreating a user cluster with a previously used name (which commonly occurs during Terraform deployments or manual reinstalls), cluster provisioning stalled indefinitely in the provisioning state due to a missing k8s-health-check service account. The installer ensures that the service account is created, eliminating the need to manually create the service account as a workaround. 
- Fixed an issue where the gkectl diagnose command failed to run on standard user clusters managed by an advanced admin cluster.
[Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/vulnerabilities)

```
stackdriver.disableVsphereResourceMetrics
```


```
gkectl diagnose
```

### Announcement
Google Distributed Cloud (software only) for bare metal 1.34.500-gke.108 is now available for download. To upgrade, see [Upgrade clusters](https://cloud.google.com/feeds/how-to/upgrade). Google Distributed Cloud for bare metal 1.34.500-gke.108 runs on Kubernetes v1.34.7-gke.200.
After a release, it takes approximately 7 to 14 days for the version to become available for installations or upgrades with the GKE On-Prem API clients: the Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready storage partners document to make sure the storage vendor has already passed the qualification for this release of Google Distributed Cloud for bare metal.

### Fixed
The following issues were fixed in 1.34.500-gke.108:
- Fixed vulnerabilities listed in [Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities).
- Fixed an issue where, if a new control plane node failed to join a cluster
during bootstrapping or scaling (associated with installer Ansible runner job
failures), orphaned etcd memberships were not cleaned up, causing the existing
control plane's API server to restart repeatedly (flap) and blocking subsequent
retry attempts.

- Fixed an issue where, during control plane certificate rotation or etcd
encryption updates, the installer stalled for three minutes per control plane node
while waiting for the local API server to restart, causing nodes to temporarily
report an Unknown status and triggering transient routing disruptions (such as
503 Service Unavailable or ImagePullBackOff errors) for workloads scheduled on
those nodes.

- Fixed an issue where, when enabling or updating etcd encryption, the API
server was terminated abruptly, causing transient connection timeouts or
failures for in-cluster workloads for up to five minutes.

- Fixed an issue where, when recreating a user cluster with a previously used
name (which commonly occurs during Terraform deployments or manual
reinstalls), cluster provisioning stalled indefinitely in the provisioning
state due to a missing k8s-health-check service account. The installer
ensures that the service account is created, eliminating the need to manually
create the service account as a workaround.
[Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities)

#### (2026-R21) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for manual control plane upgrades and node upgrades for existing clusters. For more information about versioning and upgrades, see [GKE versioning and support](https://cloud.google.com/kubernetes-engine/versioning) and [About GKE cluster upgrades](https://cloud.google.com/kubernetes-engine/upgrades).

- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation in the Rapid channel.
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Rapid channel:

1.33.11-gke.1074000
1.33.11-gke.1197000
1.34.7-gke.1055000
1.34.7-gke.1499000
1.35.3-gke.1993000
1.35.3-gke.2190000
1.36.0-gke.1575000
1.36.0-gke.1759000

- 1.33.11-gke.1074000
- 1.33.11-gke.1197000
- 1.34.7-gke.1055000
- 1.34.7-gke.1499000
- 1.35.3-gke.1993000
- 1.35.3-gke.2190000
- 1.36.0-gke.1575000
- 1.36.0-gke.1759000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1000000
1.34 to 1.34.8-gke.1000000
1.35 to 1.35.5-gke.1000000
1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.11-gke.1074000
- 1.33.11-gke.1197000
- 1.34.7-gke.1055000
- 1.34.7-gke.1499000
- 1.35.3-gke.1993000
- 1.35.3-gke.2190000
- 1.36.0-gke.1575000
- 1.36.0-gke.1759000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Regular channel.
- The following versions are now available in the Regular channel:

[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- The following versions are no longer available in the Regular channel:

1.33.11-gke.1013000
1.34.6-gke.1307000
1.35.3-gke.1389000

- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1074000
1.34 to 1.34.7-gke.1055000
1.35 to 1.35.3-gke.1389002


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

### Regular channel
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

### Stable channel
- Version [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346) is now the default version for cluster creation in the Stable channel.
- The following versions are now available in the Stable channel:

[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- The following versions are no longer available in the Stable channel:

1.33.10-gke.1115000 is [[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.10-gke.1176000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1154000
1.34.6-gke.1237000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1234002 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1389000

- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000
- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1013000
1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000
- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Extended channel.
- The following versions are now available in the Extended channel:

[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- The following versions are no longer available in the Extended channel:

1.30.14-gke.2407000 is [[[[[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2415000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2530000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1816000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1823000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1942000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1258000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1318000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1551000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.11-gke.1013000
1.34.6-gke.1307000
1.35.3-gke.1389000

- 1.30.14-gke.2407000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2415000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2530000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1816000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1823000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1942000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1258000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1318000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1551000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.30 to 1.30.14-gke.2441000
1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- 1.30.14-gke.2407000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2415000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2530000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1816000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.31.14-gke.1823000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1942000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1258000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1318000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1551000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)

- 1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation.
- The following versions are now available:

[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following node versions are now available:

[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available:

1.33.10-gke.1115000 is [[[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
1.33.10-gke.1176000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1068000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1237000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1234000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1234002 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1737000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1068000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.

- 1.35.3-gke.1234000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1737000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1013000
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)

- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1068000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1737000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

### No channel (deprecated)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

### Security
#### (2026-R21) Security updates
This release includes new GKE versions that use updated Container-Optimized OS images. These updated images are cumulative, incorporating security fixes from all Container-Optimized OS versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated Container-Optimized OS image, see the Security release notes for that image. The following table includes links to the release notes for each updated Container-Optimized OS image:
GKE version Container-Optimized OS version Details 1.30.14-gke.2558000 cos-117-18613-613-5 [cos-117-18613-613-5 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m117#cos-117-18613-613-5_) 1.31.14-gke.1967000 cos-117-18613-613-7 [cos-117-18613-613-7 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m117#cos-117-18613-613-7_) 1.33.12-gke.1059000 cos-121-18867-381-125 [cos-121-18867-381-125 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m121#cos-121-18867-381-125_) 1.35.5-gke.1057000 cos-125-19216-395-7 [cos-125-19216-395-7 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m125#cos-125-19216-395-7_) 1.36.0-gke.2459000 cos-129-19506-120-64 [cos-129-19506-120-64 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m129#cos-129-19506-120-64_)

#### (2026-R21) Version updates
- Version [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346) is now the default version for cluster creation in the Stable channel.
- The following versions are now available in the Stable channel:

[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- The following versions are no longer available in the Stable channel:

1.33.10-gke.1115000 is [[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.10-gke.1176000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1154000
1.34.6-gke.1237000 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1234002 is deprecated in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1389000

- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000
- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1013000
1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1154000
- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Stable channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1389000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

#### (2026-R21) Version updates
- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Regular channel.
- The following versions are now available in the Regular channel:

[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- The following versions are no longer available in the Regular channel:

1.33.11-gke.1013000
1.34.6-gke.1307000
1.35.3-gke.1389000

- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1074000
1.34 to 1.34.7-gke.1055000
1.35 to 1.35.3-gke.1389002


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.33 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.34 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)

[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

#### (2026-R21) Version updates
- Version [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355) is now the default version for cluster creation in the Rapid channel.
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- The following versions are no longer available in the Rapid channel:

1.33.11-gke.1074000
1.33.11-gke.1197000
1.34.7-gke.1055000
1.34.7-gke.1499000
1.35.3-gke.1993000
1.35.3-gke.2190000
1.36.0-gke.1575000
1.36.0-gke.1759000

- 1.33.11-gke.1074000
- 1.33.11-gke.1197000
- 1.34.7-gke.1055000
- 1.34.7-gke.1499000
- 1.35.3-gke.1993000
- 1.35.3-gke.2190000
- 1.36.0-gke.1575000
- 1.36.0-gke.1759000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.12-gke.1000000
1.34 to 1.34.8-gke.1000000
1.35 to 1.35.5-gke.1000000
1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2459000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- 1.33.11-gke.1074000
- 1.33.11-gke.1197000
- 1.34.7-gke.1055000
- 1.34.7-gke.1499000
- 1.35.3-gke.1993000
- 1.35.3-gke.2190000
- 1.36.0-gke.1575000
- 1.36.0-gke.1759000
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)

- 1.32 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.33 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.34 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- 1.34 to [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- 1.35 to [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.36 to [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

#### (2026-R21) Version updates
- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation.
- The following versions are now available:

[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following node versions are now available:

[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following versions are no longer available:

1.33.10-gke.1115000 is [[[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
1.33.10-gke.1176000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1068000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.34.6-gke.1237000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1234000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1234002 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.
1.35.3-gke.1737000 is deprecated. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1068000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.

- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1737000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.33 to 1.33.11-gke.1013000
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1059000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1126000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1057000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- 1.33.10-gke.1115000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.10-gke.1176000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1068000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.34.6-gke.1237000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1234002 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
- 1.35.3-gke.1737000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support). This version will be removed in 90 days, or at the end of support, if sooner.
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)

- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.32 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.33 to [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

#### (2026-R21) Version updates
- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now the default version for cluster creation in the Extended channel.
- The following versions are now available in the Extended channel:

[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- The following versions are no longer available in the Extended channel:

1.30.14-gke.2407000 is [[[[[[[[[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2415000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.30.14-gke.2530000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1816000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1823000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.31.14-gke.1942000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1258000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1318000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.32.13-gke.1551000 is deprecated in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
1.33.11-gke.1013000
1.34.6-gke.1307000
1.35.3-gke.1389000

- 1.30.14-gke.2407000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2415000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2530000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1816000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1823000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1942000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1258000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1318000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1551000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
- Clusters in this channel running the listed minor version have new general auto-upgrade targets. GKE can upgrade control planes and nodes to the following new versions with this release:

GKE upgrades clusters to the following new minor versions if there are no factors, such as [[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has maintenance exclusions or other factors preventing minor version upgrades:

1.30 to 1.30.14-gke.2441000
1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)


- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- [1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2558000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.31.14-gke.1967000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.32.13-gke.1592000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1197000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1499000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.2190000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- 1.30.14-gke.2407000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2415000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.30.14-gke.2530000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1816000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.

- 1.31.14-gke.1823000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.31.14-gke.1942000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1258000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1318000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.32.13-gke.1551000 is [deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support) in the Extended channel. This version will be removed in 90 days, or at the end of support, if sooner.
- 1.33.11-gke.1013000
- 1.34.6-gke.1307000
- 1.35.3-gke.1389000
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
[deprecated](https://docs.cloud.google.com/kubernetes-engine/versioning#patch-version-support)
- GKE upgrades clusters to the following new minor versions if there are no factors, such as [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or deprecated APIs, preventing upgrades:

1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)

- 1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- GKE upgrades clusters to the following new patch versions if no minor version upgrade is available, or if the cluster has [maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions) or other factors preventing minor version upgrades:

1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- 1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)

- 1.29 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[maintenance exclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#exclusions)
- 1.30 to [1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- 1.31 to [1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- 1.32 to [1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- 1.33 to [1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- 1.34 to [1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
- 1.35 to [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2441000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1850000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1449000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.11-gke.1074000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.7-gke.1055000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1347)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

Standard parser support policy
Google SecOps introduced a focused support policy for Standard parsers to scale platform stability, predictable performance, and high-quality data normalization. The new policy structures service level objectives (SLOs) and request triaging by customer support tiers (Standard versus Expert/Expert+), and prioritizes core security data through [Important UDM Fields](https://docs.cloud.google.com/chronicle/docs/reference/important-udm-fields). Additionally, the policy outlines a community-driven model where low-usage, longtail prebuilt parsers migrate to a dedicated GitHub repository maintained by partners and the Google SecOps community.
For more information, see [Standard parser support policy](https://docs.cloud.google.com/chronicle/docs/ingestion/standard-parser-support-policy).

New Cloud Identity integration

Standard parser support policy
Google SecOps introduced a focused support policy for Standard parsers to scale platform stability, predictable performance, and high-quality data normalization. The new policy structures service level objectives (SLOs) and request triaging by customer support tiers (Standard versus Expert/Expert+), and prioritizes core security data through [Important UDM Fields](https://docs.cloud.google.com/chronicle/docs/reference/important-udm-fields). Additionally, the policy outlines a community-driven model where low-usage, longtail prebuilt parsers migrate to a dedicated GitHub repository maintained by partners and the Google SecOps community.
For more information, see [Standard parser support policy](https://docs.cloud.google.com/chronicle/docs/ingestion/standard-parser-support-policy).

You can use the data lineage remote MCP server to interact with Knowledge Catalog (formerly Dataplex Universal Catalog) to query data lineage graphs, discover upstream data provenance, and analyze downstream impact.
This feature is available in [preview](https://cloud.google.com/products#product-launch-stages). For more information, see [Use the data lineage remote MCP server](https://docs.cloud.google.com/dataplex/docs/use-lineage-mcp).

### Announcement
The following features will begin rolling out as part of Looker 26.8.

### Feature
The Looker [Continuous Integration (CI)](https://docs.cloud.google.com/looker/docs/continuous-integration) feature is now generally available.

### Feature
Conversational Analytics now supports the ability to run queries when users are in [Development Mode](https://docs.cloud.google.com/looker/docs/dev-mode-prod-mode#development_mode).

### Feature
Now available in preview for BigQuery and Snowflake connections, Looker integrates with in-database analytic models ([BigQuery Graph](https://docs.cloud.google.com/bigquery/docs/graph-overview) and [Snowflake semantic views](https://docs.snowflake.com/en/user-guide/views-semantic/overview)), so that you can keep your semantic definitions consistent across Looker and other BI tools, applications, or workloads that interface with your data warehouse.
See the [In-database analytic models](https://docs.cloud.google.com/looker/docs/analytic-models) documentation page for more information.
Note: This item was added on May 28, 2026.

### Feature
Now available in preview, dashboard editors can change the size and layout of dashboard tiles with more granularity. To enable this feature, a Looker admin must turn on the [Granular Dashboard Sizing](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs#granular-dashboard-sizing) setting on the Preview page in the Admin panel.

### Feature
Now available in preview, enhanced observability metrics, including engagement and token usage data, are available for Conversational Analytics on the [Conversational Analytics System Activity dashboard](https://docs.cloud.google.com/looker/docs/system-activity-dashboards#conversational-analytics). To use this feature, a Looker admin must turn on the Conversational Analytics Observability setting on the Preview admin page. Note: Token usage monitoring for Conversational Analytics is not available at this time. This item was updated on June 1, 2026.

### Feature
Now available in preview, you can use natural language to instruct a Conversational Analytics data agent to create a [workflow](https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-agentic-workflows) that notifies you when your data has met certain conditions. To use this feature, a Looker admin must turn on the Agentic Workflows setting on the Gemini in Looker admin page.

### Feature
Now available in preview, the [Looker-managed Model Context Protocol (MCP) server](https://docs.cloud.google.com/looker/docs/mcp) allows AI agents to securely connect to your Looker instance without requiring separate middleware. Looker admins can enable this feature and [manage which AI tools](https://docs.cloud.google.com/looker/docs/admin-panel-platform-mcp#model_context_protocol_mcp_settings) are available to developers from the new Model Context Protocol (MCP) page in the Admin panel. Usage of the managed MCP server is also tracked within [System Activity Explores](https://docs.cloud.google.com/looker/docs/mcp#system_activity) and [Cloud Audit Logs](https://docs.cloud.google.com/looker/docs/looker-core-audit-logging#sample_queries).

### Feature
Model localization for imported projects will be supported in a future release.
Note: This item was updated on May 28, 2026.

### Feature
Now available in preview, you can [publish the Conversational Analytics data agents](https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents) that you create in Looker to Gemini Enterprise. All users who have the save_agents permission will be granted the publish_agent_externally permission. To use this feature, a Looker admin must turn on the Publish to Gemini Enterprise setting on the Gemini in Looker admin page.

```
save_agents
```


```
publish_agent_externally
```

### Feature
Now available in preview, you can create and use Conversational Analytics [data agents on Looker user-defined dashboards](https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-dashboards). Conversational Analytics uses the [Production Mode](https://docs.cloud.google.com/looker/docs/dev-mode-prod-mode#production_mode) of content when it queries Looker dashboards. To use this feature, a Looker admin must turn on the Enable Dashboard Agents setting on the Gemini in Looker admin page.

### Feature
Looker has introduced the following new feature updates for tabbed dashboards:
- The ability to [add buttons with navigation to tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#add-buttons-with-navigation-to-tabs)
- The ability to [duplicate tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#duplicate-tabs)
- The ability to [select all or deselect all tiles on a dashboard tab for filters](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#apply-filters)
- The ability to [monitor dashboard tab usage with the Dashboard System Activity Explore](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#monitor-dashboard-tab-usage-with-system-activity)
- The ability to [schedule or send a single dashboard tab or a specific set of tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#schedule-pdf)
- The ability to [download a single dashboard tab or a specific set of tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#download-pdf)
- The ability to [add a dashboard tab view to a board](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#add-to-board)
[add buttons with navigation to tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#add-buttons-with-navigation-to-tabs)
[duplicate tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#duplicate-tabs)
[select all or deselect all tiles on a dashboard tab for filters](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#apply-filters)
[monitor dashboard tab usage with the Dashboard System Activity Explore](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#monitor-dashboard-tab-usage-with-system-activity)
[schedule or send a single dashboard tab or a specific set of tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#schedule-pdf)
[download a single dashboard tab or a specific set of tabs](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#download-pdf)
[add a dashboard tab view to a board](https://docs.cloud.google.com/looker/docs/tabbed-dashboards#add-to-board)

### Feature
The [Self-service Explores](https://docs.cloud.google.com/looker/docs/exploring-self-service) feature is now supported on Snowflake connections. Your Looker admin can select a Snowflake connection in the [Default Connection field](https://docs.cloud.google.com/looker/docs/admin-panel-self-service-explore#enable) of the Self-service Explores admin page. On Snowflake connections, you can [upload comma-separated files (CSV) and Excel files (XLS and XLSX)](https://docs.cloud.google.com/looker/docs/exploring-self-service#files-from-computer) to create a self-service Explore.

### Feature
Looker has introduced a security sandboxing enhancement for Git command-line interface (CLI) operations. For Looker projects that are configured with SSH connections, this enhancement restricts which directories and executables can be accessed on the instance when Git worktree commands are executed. Looker projects that use HTTPS connections are not affected.
This sandboxing feature is enabled automatically for Cloud-hosted Looker (original) and Looker (Google Cloud core) instances starting in Looker 26.8.
For [customer-hosted](https://docs.cloud.google.com/looker/docs/glossary#customer-hosted) Looker instances, this security enhancement is available starting in Looker 26.10. To opt in to security sandboxing, you must install the [proot package](https://proot-me.github.io/) on your Looker host machine. If proot isn't installed, SSH-connected Git operations will still be executed successfully but won't have the sandboxing protection.

```
proot
```


```
proot
```

Note: This item was updated on May 29, 2026.

### Feature
The [Admin > Roles panel](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles) user interface has been updated.

Looker admins can no longer create or manage API credentials for individual standard users in Looker (original) instances. Users must now [manage their own keys](https://docs.cloud.google.com/looker/docs/user-account#api-keys) from their Account page. Admins can [enable or disable self-service API key management](https://docs.cloud.google.com/looker/docs/admin-panel-users-users#api_keys) for users and continue to manage credentials for API-only service accounts. To improve security, API keys are no longer visible to admins while they are [sudoing](https://docs.cloud.google.com/looker/docs/admin-panel-users-users#impersonating_users) as another user.

### Feature
Managed Service for Apache Airflow now [supports Google Cloud tags](https://docs.cloud.google.com/composer/docs/composer-3/create-and-manage-tags) for environments.
[Tags](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview) provide a way to create annotations for resources, and conditionally allow or deny policies based on whether a resource has a specific tag.

### Feature
In Managed Airflow (Gen 3), it is now possible to create Kubernetes Secrets with the kubernetes.io/dockerconfigjson [secret type](https://kubernetes.io/docs/concepts/configuration/secret/#secret-types) through the beta Cloud Composer API, in addition to the default Opaque secret type. For more information, see [Manage Kubernetes Secrets](https://docs.cloud.google.com/composer/docs/composer-3/use-kubernetes-pod-operator#api).

```
kubernetes.io/dockerconfigjson
```


```
Opaque
```

### Fixed
(Airflow 3) The INFO log level filter in Airflow UI now correctly displays log messages with this logging level.

### Change
New [Airflow builds](https://docs.cloud.google.com/composer/docs/composer-versions#images-composer-3) are available in Managed Airflow (Gen 3):
- [composer-3-airflow-3.1.7-build.10](https://docs.cloud.google.com/composer/docs/versions-packages#composer-3-airflow-3-1-7-build-10)
- [composer-3-airflow-2.11.1-build.6](https://docs.cloud.google.com/composer/docs/versions-packages#composer-3-airflow-2-11-1-build-6) (default)
- [composer-3-airflow-2.10.5-build.39](https://docs.cloud.google.com/composer/docs/versions-packages#composer-3-airflow-2-10-5-build-39)
[composer-3-airflow-3.1.7-build.10](https://docs.cloud.google.com/composer/docs/versions-packages#composer-3-airflow-3-1-7-build-10)
[composer-3-airflow-2.11.1-build.6](https://docs.cloud.google.com/composer/docs/versions-packages#composer-3-airflow-2-11-1-build-6)
[composer-3-airflow-2.10.5-build.39](https://docs.cloud.google.com/composer/docs/versions-packages#composer-3-airflow-2-10-5-build-39)

### Change
New [images](https://docs.cloud.google.com/composer/docs/composer-versions#images-composer-2) are available in Managed Airflow (Gen 2):
- [composer-2.17.3-airflow-2.11.1](https://docs.cloud.google.com/composer/docs/versions-packages#composer-2-17-3-airflow-2-11-1) (default)
- [composer-2.17.3-airflow-2.10.5](https://docs.cloud.google.com/composer/docs/versions-packages#composer-2-17-3-airflow-2-10-5)
[composer-2.17.3-airflow-2.11.1](https://docs.cloud.google.com/composer/docs/versions-packages#composer-2-17-3-airflow-2-11-1)
[composer-2.17.3-airflow-2.10.5](https://docs.cloud.google.com/composer/docs/versions-packages#composer-2-17-3-airflow-2-10-5)

### Deprecated
The following Managed Airflow versions and builds have reached their [end of support period](https://docs.cloud.google.com/composer/docs/composer-versioning-overview#version-deprecation-and-support): composer-3-airflow-2.9.3-build.24, composer-2.13.2-airflow-2.9.3, composer-2.13.2-airflow-2.10.5.

For Exadata Database Service on Exascale infrastructure, Base Database Service, and Goldengate, Oracle Database@Google Cloud adds the following regions and zones:
- australia-southeast2-a-r2 (Melbourne, Australia)
- europe-west8-b-r1 and europe-west8-a-r1 (Milan, Italy)

```
australia-southeast2-a-r2
```


```
europe-west8-b-r1
```


```
europe-west8-a-r1
```

For a list of supported locations, see [Supported regions and zones](https://docs.cloud.google.com/oracle/database/docs/regions-and-zones).

Secure Source Manager enforces a daily rate quota on the size of code scanned for credentials per instance. The default quota limit is 1 GB per day per instance. For more information, see [Quotas and limits](https://docs.cloud.google.com/secure-source-manager/docs/quotas).

Spanner Graph supports a suite of [graph algorithms](https://docs.cloud.google.com/spanner/docs/graph/graph-algorithms-overview) covering use cases such as fraud detection, entity resolution, and recommendations. You can invoke graph algorithms as built-in function calls in Spanner Graph queries. You can save your output to Cloud Storage or Spanner. This feature is available in [Preview](https://docs.cloud.google.com/products#product-launch-stages).

### Feature
Agent Search: Table and image annotation in layout parser
The table annotation and image annotation features of the layout parser are generally available (GA).
You can ask the layout parser to annotate images or tables with a descriptive block of text describing the information in the image or table. The annotation can then be used as a source in a generated answer. For more information, see [Layout parser](https://docs.cloud.google.com/generative-ai-app-builder/docs/parse-chunk-documents#layout-parsing).

### Feature
The [Data Science Agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent) (DSA) for Colab Enterprise and BigQuery is now [generally available](https://cloud.google.com/products/#product-launch-stages) (GA).

For [global external Application Load Balancers](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-global-traffic-mgmt#cdn-cache-policy), you can configure Cloud CDN cache policies at various levels of a URL map, providing more granular control over caching. You can now apply specific caching logic based on hostnames, URL paths, HTTP headers, and query parameters. This feature is Generally Available.
For more information, see [Cache policies in URL maps](https://docs.cloud.google.com/cdn/docs/caching#cache-policies-url-maps).

### Feature
For global external Application Load Balancers, you can configure Cloud CDN cache policies at various levels of a URL map. This provides granular control over caching policies based on criteria like hostname, URL path, HTTP headers, and query parameters. This feature is in General availability.
For more information, see [Configure a Cloud CDN cache policy](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-global-traffic-mgmt#cdn-cache-policy).

### Feature
Frontend configuration for load balancing incoming IPv6 traffic is now supported for the following load balancers:
- Regional external Application Load Balancer
- Regional external proxy Network Load Balancer
- Regional internal Application Load Balancer
- Regional internal proxy Network Load Balancer
- Cross-region internal Application Load Balancer
- Cross-region internal proxy Network Load Balancer
This feature is in Preview.
For more information, see the following documentation:
- [Forwarding rules overview](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- [IPv6 for Application Load Balancers and proxy Network Load Balancers](https://docs.cloud.google.com/load-balancing/docs/ipv6)
- [Convert Application Load Balancer to IPv6](https://docs.cloud.google.com/load-balancing/docs/https/convert-applb-dualstack)
- [Convert Proxy Network Load Balancer to IPv6](https://docs.cloud.google.com/load-balancing/docs/tcp/convert-proxynetlb-dualstack)
- [Proxy-only subnets for Envoy-based load balancers](https://docs.cloud.google.com/load-balancing/docs/proxy-only-subnets#proxy_only_subnet_create)
[Forwarding rules overview](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
[IPv6 for Application Load Balancers and proxy Network Load Balancers](https://docs.cloud.google.com/load-balancing/docs/ipv6)
[Convert Application Load Balancer to IPv6](https://docs.cloud.google.com/load-balancing/docs/https/convert-applb-dualstack)
[Convert Proxy Network Load Balancer to IPv6](https://docs.cloud.google.com/load-balancing/docs/tcp/convert-proxynetlb-dualstack)
[Proxy-only subnets for Envoy-based load balancers](https://docs.cloud.google.com/load-balancing/docs/proxy-only-subnets#proxy_only_subnet_create)

### Announcement
Cloud Trace in Observability Analytics is generally available ([GA](https://cloud.google.com/products#product-launch-stages)). Observability Analytics lets you query and analyze your trace data by using SQL. You can chart your query results, save your queries, and join your trace and log data.
For more information, see the following documents:
- [Query and analyze telemetry with Observability Analytics](https://docs.cloud.google.com/stackdriver/docs/observability/analytics).
- [Chart SQL query results](https://docs.cloud.google.com/stackdriver/docs/observability/analytics-chart)
- [Sample SQL queries](https://docs.cloud.google.com/stackdriver/docs/observability/analytics-samples)
- [Analyze trace data with BigQuery](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset).
[Query and analyze telemetry with Observability Analytics](https://docs.cloud.google.com/stackdriver/docs/observability/analytics)
[Chart SQL query results](https://docs.cloud.google.com/stackdriver/docs/observability/analytics-chart)
[Sample SQL queries](https://docs.cloud.google.com/stackdriver/docs/observability/analytics-samples)
[Analyze trace data with BigQuery](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)

### Announcement
The Observability API is generally available ([GA](https://cloud.google.com/products#product-launch-stages)). This API lets you configure the following:
- The default storage location and the default encryption key for your
trace data.
- The observability scope.
- A linked BigQuery dataset, which lets your use BigQuery
services to analyze your trace data.
For more information, see the following documents:
- [Set defaults for observability buckets](https://docs.cloud.google.com/stackdriver/docs/observability/set-defaults-for-observability-buckets)
- [Configure observability scopes for multi-project queries](https://docs.cloud.google.com/stackdriver/docs/observability/scopes)
- [Manage observability buckets](https://docs.cloud.google.com/stackdriver/docs/observability/storage-manage)
- [API overview](https://docs.cloud.google.com/stackdriver/docs/reference/api-overview)
[Set defaults for observability buckets](https://docs.cloud.google.com/stackdriver/docs/observability/set-defaults-for-observability-buckets)
[Configure observability scopes for multi-project queries](https://docs.cloud.google.com/stackdriver/docs/observability/scopes)
[Manage observability buckets](https://docs.cloud.google.com/stackdriver/docs/observability/storage-manage)
[API overview](https://docs.cloud.google.com/stackdriver/docs/reference/api-overview)

### Announcement
Trace scopes are generally available ([GA](https://cloud.google.com/products#product-launch-stages)). For more information, see [Create and manage trace scopes](https://docs.cloud.google.com/trace/docs/trace-scope/create-and-manage).

### Feature
The following remote MCP servers automatically generate a trace span for tools/call operations. These spans can help you understand the behavior of your agentic applications. For more information, see [Investigate MCP calls using Trace](https://docs.cloud.google.com/stackdriver/docs/instrumentation/trace-remote-mcp-server-calls).

```
tools/call
```

- BigQuery
- Cloud SQL

Data Science Agent
[Generally available](https://cloud.google.com/products#product-launch-stages): [Use the Data Science Agent](https://docs.cloud.google.com/colab/docs/use-data-science-agent) to automate exploratory data analysis, perform machine learning tasks, and deliver insights from within a Colab Enterprise notebook. To get started, see Use the Data Science Agent.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-129-19506-120-115
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.77
[See List](https://storage.googleapis.com/cos-tools/19506.120.115/lakitu/gpu_driver_versions.textproto)

### Announcement
This update contains several package upgrades to the latest patch version to ensure security, along with package patches for known CVEs.

### Change
Added support for the swiotlb=any kernel command line parameter.

```
swiotlb=any
```

### Change
Update sys-process/audit to v3.0.9.

### Change
Updated glib to v2.86.5.

### Change
Updated sys-libs/pam to v1.5.3.

### Change
Upgraded net-misc/openssh to v10.0_p2.

### Fixed
Fixed a crash that occurs when using the configfile or source GRUB2 commands when Secure Boot is enabled.

```
configfile
```


```
source
```

### Fixed
Fixed a race condition triggered by ext4 online resize that rarely causes machines to fail to boot.

### Fixed
Upgraded cos-gpu-installer to v2.7.2.

### Security
Fixed CVE-2026-23171 in the Linux kernel.

### Security
Fixed CVE-2026-31419 in the Linux kernel.

### Security
Fixed CVE-2026-31430 in the Linux kernel.

### Security
Fixed CVE-2026-31709 in the Linux kernel.

### Security
Fixed CVE-2026-43074 in the Linux kernel.

### Security
Fixed CVE-2026-43088 in the Linux kernel.

### Security
Fixed CVE-2026-44431 in dev-python/urllib3.

### Security
Fixed CVE-2026-6732 in dev-libs/libxml2.

### Security
Fixed EFI variable OOB read in grub config parsing.

### Security
Fixed KCTF-9e6bf14 in the Linux kernel.

### Security
Updated dev-lang/go to 1.25.10. This fixes CVE-2026-32289,CVE-2026-32282,CVE-2026-32288,CVE-2026-27142,CVE-2025-61728,CVE-2026-27139,CVE-2026-39817,CVE-2026-39819,CVE-2025-68119,CVE-2025-61732,CVE-2026-32280,CVE-2026-25679,CVE-2026-27144,CVE-2026-32283,CVE-2026-27140,CVE-2025-61731,CVE-2026-32281,CVE-2025-61726,CVE-2025-68121,CVE-2026-27143,CVE-2026-39826,CVE-2026-39823,CVE-2026-39825,CVE-2026-33814,CVE-2026-39820,CVE-2026-42499,CVE-2026-39836.

### Security
Updated net-misc/curl to v8.20. This fixes CVE-2026-5545,CVE-2026-4873,CVE-2026-6429,CVE-2026-7168,CVE-2026-6253,CVE-2026-6276,CVE-2026-7009,CVE-2026-5773.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-125-19216-395-47
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.85
[See List](https://storage.googleapis.com/cos-tools/19216.395.47/lakitu/gpu_driver_versions.textproto)

### Announcement
This update contains several package upgrades to the latest patch version to ensure security, along with package patches for known CVEs.

### Change
Added support for the swiotlb=any kernel command line parameter.

```
swiotlb=any
```

### Change
Update sys-process/audit to v3.0.9.

### Change
Updated glib to v2.86.5.

### Change
Upgrade app-admin/fluent-bit to v3.2.10

### Change
Updated sys-libs/pam to v1.5.3.

### Change
Upgraded net-misc/openssh to v10.0_p2.

### Fixed
Fixed a crash that occurs when using the configfile or source GRUB2 commands when Secure Boot is enabled.

```
configfile
```


```
source
```

### Fixed
Upgraded cos-gpu-installer to v2.7.2.

### Security
Fixed CVE-2026-23171 in the Linux kernel.

### Security
Fixed CVE-2026-31419 in the Linux kernel.

### Security
Fixed CVE-2026-31709 in the Linux kernel.

### Security
Fixed CVE-2026-43088 in the Linux kernel.

### Security
Fixed CVE-2026-44431 in dev-python/urllib3.

### Security
Fixed CVE-2026-6732 in dev-libs/libxml2.

### Security
Fixed KCTF-9e6bf14 in the Linux kernel.

### Security
Updated dev-lang/go to 1.25.10. This fixes CVE-2026-42499,CVE-2026-39820,CVE-2026-39826,CVE-2026-33814,CVE-2026-39836,CVE-2026-39823,CVE-2026-39825,CVE-2026-39817,CVE-2026-39819.

### Security
Updated net-misc/curl to v8.20. This fixes CVE-2026-5545,CVE-2026-4873,CVE-2026-6429,CVE-2026-7168,CVE-2026-6253,CVE-2026-6276,CVE-2026-7009,CVE-2026-5773.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-121-18867-381-144
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18867.381.144/lakitu/gpu_driver_versions.textproto)

### Announcement
This update contains several package upgrades to the latest patch version to ensure security, along with package patches for known CVEs.

### Change
Update sys-process/audit to v3.0.9.

### Change
Upgrade app-admin/fluent-bit to v3.2.10

### Change
Updated glib to v2.86.5.

### Change
Updated sys-libs/pam to v1.5.3.

### Fixed
Upgraded cos-gpu-installer to v2.7.2.

### Security
Fixed CVE-2026-23171 in the Linux kernel.

### Security
Fixed CVE-2026-23473 in the Linux kernel.

### Security
Fixed CVE-2026-31449 in the Linux kernel.

### Security
Fixed CVE-2026-31709 in the Linux kernel.

### Security
Fixed CVE-2026-43109 in the Linux kernel.

### Security
Fixed CVE-2026-44431 in dev-python/urllib3.

### Security
Fixed CVE-2026-6732 in dev-libs/libxml2.

### Security
Fixed KCTF-9e6bf14 in the Linux kernel.

### Security
Updated dev-lang/go to 1.25.10. This fixes CVE-2026-33814,CVE-2026-39823,CVE-2026-39826,CVE-2026-39817,CVE-2026-39819,CVE-2026-39820,CVE-2026-39836,CVE-2026-42499,CVE-2026-39825.

### Security
Updated net-misc/curl to v8.20. This fixes CVE-2026-5545,CVE-2026-4873,CVE-2026-6429,CVE-2026-7168,CVE-2026-6253,CVE-2026-6276,CVE-2026-7009,CVE-2026-5773.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-117-18613-613-25
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18613.613.25/lakitu/gpu_driver_versions.textproto)

### Announcement
This update contains several package upgrades to the latest patch version to ensure security, along with package patches for known CVEs.

### Change
Update sys-process/audit to v3.0.9.

### Change
Updated glib to v2.86.5.

### Change
Updated sys-libs/pam to v1.5.3.

### Change
Upgraded app-containers/containerd from v1.7.29 to v1.7.31.

### Security
Fixed CVE-2026-23171 in the Linux kernel.

### Security
Fixed CVE-2026-23473 in the Linux kernel.

### Security
Fixed CVE-2026-31449 in the Linux kernel.

### Security
Fixed CVE-2026-31709 in the Linux kernel.

### Security
Fixed CVE-2026-43109 in the Linux kernel.

### Security
Fixed CVE-2026-44431 in dev-python/urllib3.

### Security
Fixed CVE-2026-6732 in dev-libs/libxml2.

### Security
Fixed KCTF-9e6bf14 in the Linux kernel.

### Security
Updated dev-lang/go to 1.25.10. This fixes CVE-2026-39817,CVE-2026-39825,CVE-2026-33814,CVE-2026-39819,CVE-2026-39826,CVE-2026-39823,CVE-2026-39820,CVE-2026-42499,CVE-2026-39836.

### Security
Updated net-misc/curl to v8.20. This fixes CVE-2026-5545,CVE-2026-4873,CVE-2026-6429,CVE-2026-7168,CVE-2026-6253,CVE-2026-6276,CVE-2026-7009,CVE-2026-5773.

### Feature
Gemini Enterprise: Filter support for Google Sites data stores (Preview)
You can add Site URL prefix filters to Google Sites data stores in Gemini Enterprise to include or exclude specific sites from search results.
This feature is in Public Preview. For more information, see [Add filters to a Google Sites data store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/gsites/add-filters-to-gsites-data-store).

### Deprecated
Gemini Enterprise: Gemini Enterprise assist is deprecated
The Gemini Enterprise assist feature is deprecated and shut down. Users can now find comprehensive and relevant answers directly in the Gemini Enterprise documentation.

### Feature
Gemini Enterprise: Data store for PagerDuty (Preview)
You can connect PagerDuty data stores to Gemini Enterprise.
Support for PagerDuty data stores is in Public Preview. For more information, see [Connect PagerDuty](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/pagerduty).

### Announcement
Gemini Enterprise: Administrator control for Gemini 3.5 Flash
Gemini Enterprise administrators can use the feature management toggle to turn on or turn off Gemini 3.5 Flash, controlling its visibility in the Gemini Enterprise app chat box.
The feature management toggle for Gemini 3.5 Flash will not be available after June 8, 2026. Starting June 8, 2026, Gemini 3.5 Flash is enabled by default and cannot be turned off for users in the Gemini Enterprise app.
For more information about feature controls, see [Manage features on the web app](https://docs.cloud.google.com/gemini/enterprise/docs/manage-web-app-features).

### Feature
The Gemini Deep Research Agent released in Preview
The Gemini Deep Research Agent has been released in Preview. The Gemini Deep Research Agent is a managed AI agent that plans, executes, and synthesizes complex, multi-step research workflows across the public web and private enterprise data to generate comprehensive, cited reports.
For more information, see [Use the Gemini Deep Research Agent](https://docs.cloud.google.com/gemini-enterprise-agent-platform/agents/use-deep-research).

### Feature
Agent Platform Sandboxes
Additional Agent Platform [sandbox](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox) features are now available:
- [Computer use](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/computer-use) (Preview):
Enables agents to automate browser-based tasks within an isolated web
browser environment. You can control the browser using the API or connect
directly using the Chrome DevTools Protocol (CDP).
- [Custom container sandboxes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/custom-containers) (Preview):
Bring your own container (BYOC) to run custom workloads with specialized
dependencies hosted in Artifact Registry.
- [Sandbox templates](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/manage-templates) (Preview):
Define sandbox specifications as reusable templates relying on pre-warmed
pools to facilitate rapid, reliable startups.
- [Sandbox snapshots](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/manage-snapshots) (Preview):
Save the exact state of your sandbox environment (including dependencies and
file systems) and restore it to a new sandbox.
[Computer use](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/computer-use)
[Custom container sandboxes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/custom-containers)
[Sandbox templates](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/manage-templates)
[Sandbox snapshots](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/sandbox/manage-snapshots)

### Feature
Identify the agents with the most content security violations
The Security dashboard displays the top 10 agents with the most content violations detected by Model Armor. The list shows the agent ID of each agent and the number of violations detected for that agent. For more information, see [Monitor content security](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/monitor-content-security).

Vertex AI Extensions deprecation
Vertex AI Extensions is deprecated and will be shut down after November 26, 2026. We recommend [migrating to Agent Platform](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/extensions/migrate) to avoid service disruption.

Google Cloud CCaaS 4.35
We've released version 4.35 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule that you have chosen. For more information, see [Deployment schedules](https://cloud.google.com/contact-center/ccai-platform/docs/deployment-schedules).

This release addresses the following issues:
- Fixed an issue where URLs copied from Microsoft Word into SMS chat sessions
were incorrectly formatted, causing links to merge with adjacent text.
- Fixed an issue with Alvaria campaigns where the dialer didn't correctly use
the country code from the @COUNTRYCODE field when selecting the contact
number to dial.
- Fixed an issue where live transcription didn't resume after an agent enabled
and then disabled redaction during IVR payment card collection.
- Fixed an issue where agents couldn't upload PDF files in chat sessions.
- Fixed an issue where end-users encountered errors or empty details when
accessing call history immediately after a call ended.
- Fixed an issue where agents became stuck in the In-call status and
couldn't end calls or change their status, preventing them from handling new
interactions.
- Fixed an issue where the deletion of the default greeting message for a
language didn't persist.
- Fixed a web SDK issue where scheduling a call in one queue incorrectly
showed the Reschedule Call screen from a different queue.
- Fixed an issue that occurred when a human agent invoked the payment virtual
task assistant to collect card details. When the call was transferred back
to the human agent, live transcription and sentiment analysis didn't resume.
- Fixed an issue where HubSpot ticket creation failed when Skip CRM Account
Creation and Skip Account Lookup were enabled. This resulted in
tickets being created without an associated phone number.
- Fixed an issue where, after transferring a call from one queue to another,
the receiving agent's desktop temporarily showed the source queue's agent
desktop layout instead of the destination queue's layout.
- Fixed an issue where outbound Telnyx calls got stuck on the agent adapter
Connecting screen when Agent Voice Detection was enabled globally.
- Fixed an issue where Alvaria Advanced Outreach outbound campaign batch files
weren't ingested by Contact Center AI Platform, preventing campaigns from loading
contacts.
- Fixed an issue where a single inbound call in Salesforce created two cases.
- Fixed an issue where the Agents dashboard showed an invalid -10 agent
status during wrap-up and after calls.
- Fixed an issue where Alvaria WFM Agent Performance reports displayed no
agent activity.
- Fixed an issue where the NICE WFM exporter reported higher abandoned call
counts than Contact Center AI Platform reporting.
- Fixed an issue where chats escalated from a virtual agent to a human agent
were dismissed shortly after assignment.
- Fixed an issue where the Ticket URL column in the Individual Call
History CSV report was blank for newly recorded calls, preventing
customers from accessing and downloading call recordings from the report.
- Fixed an issue where newly created teams couldn't be reordered in the
CCAI Platform portal.
- Fixed an issue where the agent desktop Previous Interactions panel
didn't show Agent Assist summaries from past calls.
- Fixed an issue where conversation history didn't display correctly in the
agent adapter when a chat was escalated from a virtual agent to a human
agent and then a large number of messages were sent by the end-user.
Fixed an issue where URLs copied from Microsoft Word into SMS chat sessions were incorrectly formatted, causing links to merge with adjacent text.
Fixed an issue with Alvaria campaigns where the dialer didn't correctly use the country code from the @COUNTRYCODE field when selecting the contact number to dial.
Fixed an issue where live transcription didn't resume after an agent enabled and then disabled redaction during IVR payment card collection.
Fixed an issue where agents couldn't upload PDF files in chat sessions.
Fixed an issue where end-users encountered errors or empty details when accessing call history immediately after a call ended.
Fixed an issue where agents became stuck in the In-call status and couldn't end calls or change their status, preventing them from handling new interactions.

```
In-call
```

Fixed an issue where the deletion of the default greeting message for a language didn't persist.
Fixed a web SDK issue where scheduling a call in one queue incorrectly showed the Reschedule Call screen from a different queue.
Fixed an issue that occurred when a human agent invoked the payment virtual task assistant to collect card details. When the call was transferred back to the human agent, live transcription and sentiment analysis didn't resume.

Fixed an issue where HubSpot ticket creation failed when Skip CRM Account Creation and Skip Account Lookup were enabled. This resulted in tickets being created without an associated phone number.
Fixed an issue where, after transferring a call from one queue to another, the receiving agent's desktop temporarily showed the source queue's agent desktop layout instead of the destination queue's layout.
Fixed an issue where outbound Telnyx calls got stuck on the agent adapter Connecting screen when Agent Voice Detection was enabled globally.
Fixed an issue where Alvaria Advanced Outreach outbound campaign batch files weren't ingested by Contact Center AI Platform, preventing campaigns from loading contacts.
Fixed an issue where a single inbound call in Salesforce created two cases.
Fixed an issue where the Agents dashboard showed an invalid -10 agent status during wrap-up and after calls.

```
-10
```

Fixed an issue where Alvaria WFM Agent Performance reports displayed no agent activity.
Fixed an issue where the NICE WFM exporter reported higher abandoned call counts than Contact Center AI Platform reporting.
Fixed an issue where chats escalated from a virtual agent to a human agent were dismissed shortly after assignment.
Fixed an issue where the Ticket URL column in the Individual Call History CSV report was blank for newly recorded calls, preventing customers from accessing and downloading call recordings from the report.
Fixed an issue where newly created teams couldn't be reordered in the CCAI Platform portal.
Fixed an issue where the agent desktop Previous Interactions panel didn't show Agent Assist summaries from past calls.
Fixed an issue where conversation history didn't display correctly in the agent adapter when a chat was escalated from a virtual agent to a human agent and then a large number of messages were sent by the end-user.

### Feature
Cloud Storage FUSE CSI driver is now supported for Google Cloud Dedicated clusters and node pools running GKE version 1.36.0-gke.1266000 and higher. To use the driver, you must specify the custom-endpoint mount option by using either the [gcsfuse CLI](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options#options) or the [configuration file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file#format-and-fields) format. For more information, see [About Cloud Storage FUSE CSI driver for GKE](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cloud-storage-fuse-csi-driver).

```
custom-endpoint
```

### Feature
To monitor the efficiency of the GKE training JobSet, the following two GKE system metrics are available in Preview:
- kubernetes.io/jobset/scheduling_goodput: the fraction of time that all the
resources required to run the training JobSet are available.
- kubernetes.io/jobset/proxy_runtime_goodput: the fraction of time that all
required accelerators are productive. This metric provides an estimate of the
real runtime goodput.

```
kubernetes.io/jobset/scheduling_goodput
```


```
kubernetes.io/jobset/proxy_runtime_goodput
```

For details about GKE metrics, see [Kubernetes metrics](https://docs.cloud.google.com/monitoring/api/metrics_kubernetes#kubernetes-kubernetes). For details about goodput metrics that are used to measure efficiency, see [Monitor goodput with the ML Goodput Measurement library](https://docs.cloud.google.com/tpu/docs/goodput#jobset-dashboard).
You can also view these new GKE metrics in the [JobSet monitoring dashboard](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/tpu-multislice-kueue#monitor_the_workloads).

### Feature
Data products in Knowledge Catalog is Generally Available ([GA](https://cloud.google.com/products#product-launch-stages)). A data product serves as a logical, curated package of data assets and context designed to solve a specific business problem.
This release includes the following new features:
- Approval workflows for data product consumption: Data product consumers
can browse published data products, submit access requests, and track their
status. Data product owners can track, approve, or reject access requests
using the Google Cloud Console or the API. For more information, see
[Use data products](https://cloud.google.com/dataplex/docs/use-data-products)
and
[Manage data products](https://cloud.google.com/dataplex/docs/manage-data-products).
- Automated documentation and insights: Data product owners can leverage
Knowledge Catalog data insights and Gemini to automatically generate sample
queries, business insights, and documentation templates for data products.
For more information, see
[Create data products](https://cloud.google.com/dataplex/docs/create-data-products).
- Service account support: Data product owners can configure service
accounts in access groups, and data product consumers can request access for
their service accounts. For more information, see
[Create data products](https://cloud.google.com/dataplex/docs/create-data-products).
- Remote Model Context Protocol (MCP) server support (Preview) Data
applications and AI agents can programmatically interact with data products.
By deploying the Knowledge Catalog remote MCP server, developers can create
data products, discover data products, and inspect data product metadata from
external IDEs and LLM clients. For more information, see
[Access data products using Model Context Protocol](https://cloud.google.com/dataplex/docs/use-data-products#mcp-server).
Approval workflows for data product consumption: Data product consumers can browse published data products, submit access requests, and track their status. Data product owners can track, approve, or reject access requests using the Google Cloud Console or the API. For more information, see [Use data products](https://cloud.google.com/dataplex/docs/use-data-products) and [Manage data products](https://cloud.google.com/dataplex/docs/manage-data-products).
Automated documentation and insights: Data product owners can leverage Knowledge Catalog data insights and Gemini to automatically generate sample queries, business insights, and documentation templates for data products. For more information, see [Create data products](https://cloud.google.com/dataplex/docs/create-data-products).
Service account support: Data product owners can configure service accounts in access groups, and data product consumers can request access for their service accounts. For more information, see [Create data products](https://cloud.google.com/dataplex/docs/create-data-products).
Remote Model Context Protocol (MCP) server support (Preview) Data applications and AI agents can programmatically interact with data products. By deploying the Knowledge Catalog remote MCP server, developers can create data products, discover data products, and inspect data product metadata from external IDEs and LLM clients. For more information, see [Access data products using Model Context Protocol](https://cloud.google.com/dataplex/docs/use-data-products#mcp-server).

### Feature
[Spotlight Feature] Create and manage calculated fields
The Calculated Fields feature is now available in Preview. With Calculated Fields, you can dynamically derive new data points within Google Security Operations cases and alerts. By defining logical formulas, you can compute values based on existing system or custom fields. The calculated value is automatically evaluated and stored in a user-selected, pre-existing custom field (labeled Target Field) in real time.
For more information, see [Create and manage calculated fields](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/calculated-fields).

Time range selection for searches
Google SecOps has now added relative and absolute time range options to define the required time period for retrieving search results.
- Relative time range: Set a search window looking backward from the current time
using custom intervals.
- Absolute time range: Define fixed start and end times using calendar presets,
exact date and time selections, or event-based timeframes.
For more information, see [Set the date and time range](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search#setDateTime).

### Feature
Create and manage calculated fields
The Calculated Fields feature is now available in Preview. With Calculated Fields, you can dynamically derive new data points within Google Security Operations cases and alerts. By defining logical formulas, you can compute values based on existing system or custom fields. The calculated value is automatically evaluated and stored in a user-selected, pre-existing custom field (labeled Target Field) in real time.
For more information, see [Create and manage calculated fields](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/calculated-fields).

### Announcement
Release 6.3.86 is being rolled out to the first phase of regions as listed [here](https://docs.cloud.google.com/chronicle/docs/soar/overview-and-introduction/soar-gradual-release).
This release contains internal and customer bug fixes.

### Announcement
[Release 6.3.85](https://docs.cloud.google.com/chronicle/docs/soar/release-notes#May_17_2026) is now available for all regions.

### Feature
DNS Armor is generally available [(GA)](https://cloud.google.com/products#product-launch-stages).

DNS Armor is generally available [(GA)](https://cloud.google.com/products#product-launch-stages).

### Announcement
Apigee Emulator

### Apigee Emulator v2.0.0
On May 22, 2026, we released Apigee Emulator version 2.0.0.
Starting with this release, the Apigee Emulator is versioned and released independently from Apigee hybrid. This enables faster delivery of security patches and updates without waiting for hybrid release cycles. The emulator image continues to be available at [Google Artifact Registry](https://console.cloud.google.com/artifacts/docker/apigee-release/us/gcr.io/hybrid%2Fapigee-emulator).
To use the new version, update the emulator version in your VS Code Cloud Code settings to 2.0.0. See [Manage the Apigee Emulator](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/manage-apigee-emulator#choose_the_emulator_version) for details.

```
2.0.0
```

### Feature
Apigee Emulator

#### Changed in this release
- The Apigee Emulator now follows independent semantic versioning
(MAJOR.MINOR.PATCH), decoupled from Apigee hybrid versioning.
- Updated base Cassandra image to version 4.0.19.
- Updated Java runtime to Eclipse Temurin JRE 11.0.31.

### Security
Apigee Emulator

#### Security
This release addresses 78 security vulnerabilities across Cassandra base image, Go standard library, Java dependencies, and Python packages. Key fixes include:
[CVE-2022-42003](https://nvd.nist.gov/vuln/detail/CVE-2022-42003)
[CVE-2022-42004](https://nvd.nist.gov/vuln/detail/CVE-2022-42004)
[CVE-2022-38749](https://nvd.nist.gov/vuln/detail/CVE-2022-38749)
[CVE-2022-38750](https://nvd.nist.gov/vuln/detail/CVE-2022-38750)
[CVE-2023-2976](https://nvd.nist.gov/vuln/detail/CVE-2023-2976)
[CVE-2020-8908](https://nvd.nist.gov/vuln/detail/CVE-2020-8908)
[CVE-2024-12798](https://nvd.nist.gov/vuln/detail/CVE-2024-12798)
[CVE-2025-22866](https://nvd.nist.gov/vuln/detail/CVE-2025-22866)
[CVE-2025-22870](https://nvd.nist.gov/vuln/detail/CVE-2025-22870)
[CVE-2022-40897](https://nvd.nist.gov/vuln/detail/CVE-2022-40897)
And 68 additional CVEs fixed through updated upstream dependencies.

### v1.14.5
On May 22, 2026 we released an updated version of the Apigee hybrid software, v1.14.5.
- For information on upgrading, see [Upgrading Apigee hybrid to version v1.14.5](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade).
- For information on new installations, see [The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/big-picture).
[Upgrading Apigee hybrid to version v1.14.5](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade)
[The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/big-picture)
[Apigee release process](https://docs.cloud.google.com/apigee/docs/release/apigee-release-process#apigee-hybrid-container-images)

### Security
Various security and CVE fixes are included in this release.

### Announcement
On May 22, 2026 we released an updated version of the Apigee UI.
The Management > Instances page now displays Apigee hybrid instances. The display includes the instance name, location, and runtime version.
See [Managing instances](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/instances).

### Apigee Emulator is now released independently
Starting May 22, 2026, the Apigee Emulator is versioned and released independently from Apigee hybrid. Emulator updates, including security patches, are no longer tied to hybrid release cycles.
The emulator image continues to be available at gcr.io/apigee-release/hybrid/apigee-emulator. The first independent release is v2.0.0.

```
gcr.io/apigee-release/hybrid/apigee-emulator
```

For emulator release notes going forward, see [Apigee release notes](https://docs.cloud.google.com/apigee/docs/release/release-notes).

Database Migration Service for homogeneous SQL Server migrations now provides dedicated support for Cloud SQL for SQL Server sources. This feature is generally available ([GA](https://cloud.google.com/products#product-launch-stages)).
For Cloud SQL for SQL Server sources, Database Migration Service automatically exports all required backup files and uploads them to a dedicated Cloud Storage bucket. For more information, see the [Migration guide for Cloud SQL for SQL Server sources](https://docs.cloud.google.com/database-migration/docs/sqlserver/csql-sql-server-src-guide) in the Database Migration Service homogeneous SQL Server documentation.

Application Load Balancers now support the configuration of a [traffic duration](https://docs.cloud.google.com/load-balancing/docs/backend-service#applb-csm-traffic-duration) setting when you add backends to backend services. You can configure this setting as SHORT or LONG based on the response time needed by backends to complete HTTP requests.

```
SHORT
```


```
LONG
```

Application Load Balancers also support the use of the [in-flight balancing mode](https://docs.cloud.google.com/load-balancing/docs/backend-service#bmtc-inflight) that lets you configure the load balancer's traffic distribution to supported backends when requests take more than a second to complete.
This feature is in General availability.

Database Center generative views are available in [Preview](https://cloud.google.com/products/#product-launch-stages). Generative views use Gemini and natural language prompts to let you generate and save customized dashboard views of your database fleet inventory and metrics.
For more information, see [Generate dashboard views using Gemini](https://docs.cloud.google.com/database-center/docs/generative-views).

### Feature
Default Key Access Justifications policies are generally available. When you use Key Access Justifications with Cloud Key Management Service or Cloud HSM for the Assured Workloads [Japan Data Boundary](https://docs.cloud.google.com/assured-workloads/docs/control-packages/japan-data-boundary), you can create default Key Access Justifications policies at the organization, folder, or project level. For more information about default Key Access Justifications policies, see [Set default Key Access Justifications policy](https://docs.cloud.google.com/assured-workloads/key-access-justifications/docs/set-default-policy).

### Fixed
ChatGPT users are now able to list and use the AlloyDB toolset provided by the AlloyDB remote MCP server.

On May 21st, 2026, we released an updated version of Apigee (1-17-0-apigee-8).

### v1.16.4
On May 21, 2026 we released an updated version of the Apigee hybrid software, v1.16.4.
- For information on upgrading, see [Upgrading Apigee hybrid to version v1.16.4](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/upgrade).
- For information on new installations, see [The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/big-picture).
[Upgrading Apigee hybrid to version v1.16.4](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/upgrade)
[The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/big-picture)
[Apigee release process](https://docs.cloud.google.com/apigee/docs/release/apigee-release-process#apigee-hybrid-container-images)

### Fixed
#### Fixed in this release

```
gcr.io/apigee-release/hybrid/
```

The App Engine Migration hub lets you migrate services in the App Engine standard environment to Cloud Run, and also provides cost-saving recommendations. For more information, see [Deploy an App Engine app in the standard environment to Cloud Run](https://docs.cloud.google.com/appengine/migration-center/run/migrate-app-engine-standard-to-run) ([Preview](https://cloud.google.com/products?e=48754805#product-launch-stages)).

The App Engine Migration hub lets you migrate services in the App Engine standard environment to Cloud Run, and also provides cost-saving recommendations. For more information, see [Deploy an App Engine app in the standard environment to Cloud Run](https://docs.cloud.google.com/appengine/migration-center/run/migrate-app-engine-standard-to-run) ([Preview](https://cloud.google.com/products?e=48754805#product-launch-stages)).

The App Engine Migration hub lets you migrate services in the App Engine standard environment to Cloud Run, and also provides cost-saving recommendations. For more information, see [Deploy an App Engine app in the standard environment to Cloud Run](https://docs.cloud.google.com/appengine/migration-center/run/migrate-app-engine-standard-to-run) ([Preview](https://cloud.google.com/products?e=48754805#product-launch-stages)).

The App Engine Migration hub lets you migrate services in the App Engine standard environment to Cloud Run, and also provides cost-saving recommendations. For more information, see [Deploy an App Engine app in the standard environment to Cloud Run](https://docs.cloud.google.com/appengine/migration-center/run/migrate-app-engine-standard-to-run) ([Preview](https://cloud.google.com/products?e=48754805#product-launch-stages)).

The App Engine Migration hub lets you migrate services in the App Engine standard environment to Cloud Run, and also provides cost-saving recommendations. For more information, see [Deploy an App Engine app in the standard environment to Cloud Run](https://docs.cloud.google.com/appengine/migration-center/run/migrate-app-engine-standard-to-run) ([Preview](https://cloud.google.com/products?e=48754805#product-launch-stages)).

The App Engine Migration hub lets you migrate services in the App Engine standard environment to Cloud Run, and also provides cost-saving recommendations. For more information, see [Deploy an App Engine app in the standard environment to Cloud Run](https://docs.cloud.google.com/appengine/migration-center/run/migrate-app-engine-standard-to-run) ([Preview](https://cloud.google.com/products?e=48754805#product-launch-stages)).

The following resource types are publicly available through the [ExportAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/exportAssets), [ListAssets](https://docs.cloud.google.com/asset-inventory/docs/listing-assets), [BatchGetAssetsHistory](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/batchGetAssetsHistory), [QueryAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/queryAssets), [Feed](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds), [SearchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources), and [SearchAllIamPolicies](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllIamPolicies) APIs.
- Apigee

apigee.googleapis.com/SecurityAction
apigee.googleapis.com/SecurityMonitoringCondition
apigee.googleapis.com/SecurityProfileV2

- apigee.googleapis.com/SecurityAction
- apigee.googleapis.com/SecurityMonitoringCondition
- apigee.googleapis.com/SecurityProfileV2
- Cloud Key Management Service

cloudkms.googleapis.com/RetiredResource

- cloudkms.googleapis.com/RetiredResource
- Hypercompute Cluster

hypercomputecluster.googleapis.com/Cluster
- hypercomputecluster.googleapis.com/Cluster
- apigee.googleapis.com/SecurityAction
- apigee.googleapis.com/SecurityMonitoringCondition
- apigee.googleapis.com/SecurityProfileV2

```
apigee.googleapis.com/SecurityAction
```


```
apigee.googleapis.com/SecurityMonitoringCondition
```


```
apigee.googleapis.com/SecurityProfileV2
```

- cloudkms.googleapis.com/RetiredResource

```
cloudkms.googleapis.com/RetiredResource
```

- hypercomputecluster.googleapis.com/Cluster

```
hypercomputecluster.googleapis.com/Cluster
```

Zonal affinity, which was previously available in Preview, is generally available (GA).
For more information, see [Zonal affinity for internal passthrough Network Load Balancers](https://docs.cloud.google.com/load-balancing/docs/internal/zonal-affinity).

Config Controller now uses the following versions of its included products:
- Config Connector v1.148.0-cc.3, [release notes](https://docs.cloud.google.com/config-connector/docs/release-notes#April_22_2026)
- Config Sync v1.23.3, [release notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes#March_26_2026)
[release notes](https://docs.cloud.google.com/config-connector/docs/release-notes#April_22_2026)
[release notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes#March_26_2026)

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-129-19506-120-97
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.77
[See List](https://storage.googleapis.com/cos-tools/19506.120.97/lakitu/gpu_driver_versions.textproto)

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-dev-133-19804-0-0
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.18.32
[See List](https://storage.googleapis.com/cos-tools/19804.0.0/lakitu/gpu_driver_versions.textproto)

### Change
Switch cchost-* boards to legacy iptables.

### Change
Added support for the R595 Nvidia driver production branch.

### Fixed
Added support for NVIDIA driver v535.309.01.

### Change
Apply hardening sysctls on cchost boards.

### Fixed
Added support for NVIDIA driver v580.159.03.

### Change
Dropped support for the NVIDIA 535 drivers.

### Fixed
Added support for NVIDIA driver v595.71.05.

### Change
Enabled mm hardening kernel cmdlines on cchost.

### Fixed
Upgraded app-shells/dash to v0.5.13.4.

### Change
Increased the size of the EFI partition from 32 MiB to 64 MiB and increased the sizes of both kernel partitions from 16 MiB to 32 MiB on x86.

### Fixed
Upgraded cos-gpu-installer to v2.7.1.

### Change
Made it so that /etc/machine-id is mounted with noexec, nosuid, and nodev.

### Fixed
Upgraded net-misc/rsync to v3.4.2.

### Change
Switch cchost-* boards to legacy iptables.

### Security
Fixed CVE-2025-38584 in the Linux kernel.

### Change
Updated the Linux kernel to v6.18.32.

### Security
Fixed CVE-2026-23473 in the Linux kernel.

### Change
Updated uhaul to v6.18-0.

### Security
Fixed CVE-2026-43060 in the Linux kernel.

### Change
Upgrade the Linux kernel to version 6.18.

### Security
Fixed CVE-2026-43063 in the Linux kernel.

### Change
Upgraded sys-apps/xemu to v0.0.9.

### Security
Fixed CVE-2026-43065 in the Linux kernel.

### Change
Upgraded sys-fs/cryptsetup to v2.8.6.

### Security
Fixed CVE-2026-43066 in the Linux kernel.

### Change
Upgraded sysram to v6.18-0.

### Security
Fixed CVE-2026-43067 in the Linux kernel.

### Feature
Added the cos_kernel_args tool that allows manipulating kernel command line arguments of a COS image.

### Security
Fixed CVE-2026-43068 in the Linux kernel.

### Feature
Added nvidia-fs support to the COS GPU installer.

### Security
Fixed CVE-2026-43071 in the Linux kernel.

### Security
Fixed CVE-2026-43073 in the Linux kernel.

### Security
Fixed CVE-2026-43079 in the Linux kernel.

### Fixed
Added support for NVIDIA driver v580.159.03.

### Security
Fixed CVE-2026-43085 in the Linux kernel.

### Fixed
Added support for NVIDIA driver v595.71.05.

### Security
Fixed CVE-2026-43086 in the Linux kernel.

### Fixed
Added support for NVIDIA drivers v580.126.16 and v580.126.20.

### Security
Fixed CVE-2026-43089 in the Linux kernel.

### Fixed
Dropped support for NVIDIA MFT Tools v4.32.0.

### Security
Fixed CVE-2026-43090 in the Linux kernel.

### Fixed
Upgraded CASFS to v0.1.3.

### Security
Fixed CVE-2026-43091 in the Linux kernel.

### Fixed
Upgraded app-admin/oslogin to v20260227.00.

### Security
Fixed CVE-2026-43093 in the Linux kernel.

### Fixed
Upgraded app-admin/oslogin to v20260430.00.

### Security
Fixed CVE-2026-43094 in the Linux kernel.

### Fixed
Upgraded app-admin/sosreport to v4.11.1.

### Security
Fixed CVE-2026-43099 in the Linux kernel.

### Fixed
Upgraded app-containers/docker-credential-helpers to v0.9.6.

### Security
Fixed CVE-2026-43107 in the Linux kernel.

### Fixed
Upgraded app-shells/dash to v0.5.13.3.

### Security
Fixed CVE-2026-43112 in the Linux kernel.

### Fixed
Upgraded app-shells/dash to v0.5.13.4.

### Security
Fixed CVE-2026-43114 in the Linux kernel.

### Fixed
Upgraded chromeos-base/chromeos-common-script to v0.0.1-r672.

### Security
Fixed CVE-2026-43117 in the Linux kernel.

### Fixed
Upgraded chromeos-base/debugd-client to v0.0.1-r2738.

### Security
Fixed CVE-2026-43329 in the Linux kernel.

### Fixed
Upgraded chromeos-base/google-breakpad to v2026.04.24.230834-r272.

### Security
Fixed CVE-2026-43332 in the Linux kernel.

### Fixed
Upgraded chromeos-base/google-breakpad to v2026.05.06.161957-r274.

### Security
Fixed CVE-2026-43333 in the Linux kernel.

### Fixed
Upgraded chromeos-base/power_manager-client to v0.0.1-r2973.

### Security
Fixed CVE-2026-43336 in the Linux kernel.

### Fixed
Upgraded chromeos-base/session_manager-client to v0.0.1-r2834.

### Security
Fixed CVE-2026-43338 in the Linux kernel.

### Fixed
Upgraded cos-gpu-installer to v2.7.1.

### Security
Fixed CVE-2026-43339 in the Linux kernel.

### Fixed
Upgraded dev-db/sqlite to v3.53.1.

### Security
Fixed CVE-2026-43341 in the Linux kernel.

### Fixed
Upgraded dev-libs/expat to v2.8.0.

### Security
Fixed CVE-2026-43350 in the Linux kernel.

### Fixed
Upgraded dev-libs/expat to v2.8.1.

### Security
Fixed CVE-2026-43359 in the Linux kernel.

### Fixed
Upgraded net-libs/libnetfilter_queue to v1.0.5-r1.

### Security
Fixed CVE-2026-43360 in the Linux kernel.

### Fixed
Upgraded net-misc/rsync to v3.4.2.

### Security
Fixed CVE-2026-43361 in the Linux kernel.

### Fixed
Upgraded sys-apps/makedumpfile to v1.7.9.

### Security
Fixed CVE-2026-43362 in the Linux kernel.

### Fixed
Upgraded sys-libs/libcap to v2.78.

### Security
Fixed CVE-2026-43363 in the Linux kernel.

### Fixed
Upgraded sys-process/lsof to v4.99.6.

### Security
Fixed CVE-2026-43365 in the Linux kernel.

### Fixed
Upgraded the dump capture kernel to Linux v6.18.

### Security
Fixed CVE-2026-43366 in the Linux kernel.

### Security
Fixed CVE-2026-0994 in dev-libs/protobuf.

### Security
Fixed CVE-2026-43374 in the Linux kernel.

### Security
Fixed CVE-2026-34743 in app-arch/xz-utils.

### Security
Fixed CVE-2026-43383 in the Linux kernel.

### Security
Fixed CVE-2026-35385 and CVE-2026-35386 in net-misc/openssh.

### Security
Fixed CVE-2026-43392 in the Linux kernel.

### Security
Fixed CVE-2026-35414 in net-misc/openssh.

### Security
Fixed CVE-2026-43393 in the Linux kernel.

### Security
Fixed CVE-2026-4046 in sys-libs/glibc.

### Security
Fixed CVE-2026-43394 in the Linux kernel.

### Security
Fixed CVE-2026-4437,CVE-2026-4438 in sys-libs/glibc.

### Security
Fixed CVE-2026-43403 in the Linux kernel.

### Security
Fixed EFI variable OOB read in grub config parsing.

### Security
Fixed CVE-2026-43409 in the Linux kernel.

### Security
Fixed argument injection in toolbox.

### Security
Fixed CVE-2026-43438 in the Linux kernel.

### Security
Updated go to v1.25.9. This resolves CVE-2026-32280, CVE-2026-32281, CVE-2026-32283, CVE-2026-27140, CVE-2026-27144.

### Security
Fixed CVE-2026-43439 in the Linux kernel.

### Security
Updated the Linux kernel to v6.18.31.

### Security
Fixed CVE-2026-43441 in the Linux kernel.

### Security
Upgraded containerd to v2.2.3. This fixes CVE-2026-35469.

### Security
Fixed CVE-2026-43448 in the Linux kernel.

### Security
Upgraded dev-libs/libgcrypt to v1.10.4 to fix CVE-2026-41989.

### Security
Fixed CVE-2026-43449 in the Linux kernel.

### Security
Upgraded dev-libs/openssl to v3.5.6 to fix CVE-2026-28387, CVE-2026-28388, CVE-2026-28389, CVE-2026-28390, CVE-2026-31790.

### Security
Fixed CVE-2026-43450 in the Linux kernel.

### Change
Runtime sysctl changes:
- Added: dev.raid.sync_io_depth: 32
- Added: fs.dentry-negative: 0
- Added: fs.fanotify.watchdog_timeout: 0
- Added: fs.fuse.default_request_timeout: 0
- Added: fs.fuse.max_request_timeout: 0
- Added: kernel.core_modes: socket
- Added: kernel.hung_task_detect_count: 0
- Added: kernel.panic_sys_info: 
- Added: net.ipv4.tcp_ecn_option: 2
- Added: net.ipv4.tcp_ecn_option_beacon: 3
- Added: net.ipv4.tcp_rto_max_ms: 120000
- Added: net.ipv4.tcp_tw_reuse_delay: 1000
- Added: net.ipv6.conf.all.force_forwarding: 0
- Added: net.ipv6.conf.default.force_forwarding: 0
- Added: net.ipv6.conf.docker0.force_forwarding: 0
- Added: net.ipv6.conf.eth0.force_forwarding: 0
- Added: net.ipv6.conf.lo.force_forwarding: 0
- Added: vm.defrag_mode: 0
- Added: vm.vfs_cache_pressure_denom: 100
- Changed: fs.epoll.max_user_watches: 1808517 -> 1808094
- Changed: fs.fanotify.max_user_marks: 68412 -> 68395
- Changed: fs.inotify.max_user_watches: 64189 -> 64173
- Changed: kernel.threads-max: 63178 -> 63459
- Changed: net.core.rmem_max: 212992 -> 4194304
- Changed: net.core.wmem_max: 212992 -> 4194304
- Changed: net.ipv4.tcp_mem: 94017    125357  188034 -> 93993 125327  187986
- Changed: net.ipv4.tcp_rmem: 4096    131072  6291456 -> 4096 131072  33554432
- Changed: net.ipv4.udp_mem: 188034   250714  376068 -> 187989    250654  375978
- Changed: net.ipv6.icmp.ratelimit: 1000 -> 100
- Changed: user.max_cgroup_namespaces: 31589 -> 31729
- Changed: user.max_fanotify_marks: 68412 -> 68395
- Changed: user.max_inotify_watches: 64189 -> 64173
- Changed: user.max_ipc_namespaces: 31589 -> 31729
- Changed: user.max_mnt_namespaces: 31589 -> 31729
- Changed: user.max_net_namespaces: 31589 -> 31729
- Changed: user.max_pid_namespaces: 31589 -> 31729
- Changed: user.max_time_namespaces: 31589 -> 31729
- Changed: user.max_user_namespaces: 31589 -> 31729
- Changed: user.max_uts_namespaces: 31589 -> 31729
- Deleted: fs.xfs.irix_sgid_inherit: 0
- Deleted: fs.xfs.irix_symlink_mode: 0
- Deleted: fs.xfs.speculative_cow_prealloc_lifetime: 300
- Deleted: net.netfilter.nf_conntrack_dccp_loose: 1
- Deleted: net.netfilter.nf_conntrack_dccp_timeout_closereq: 64
- Deleted: net.netfilter.nf_conntrack_dccp_timeout_closing: 64
- Deleted: net.netfilter.nf_conntrack_dccp_timeout_open: 43200
- Deleted: net.netfilter.nf_conntrack_dccp_timeout_partopen: 480
- Deleted: net.netfilter.nf_conntrack_dccp_timeout_request: 240
- Deleted: net.netfilter.nf_conntrack_dccp_timeout_respond: 480
- Deleted: net.netfilter.nf_conntrack_dccp_timeout_timewait: 240

### Security
Fixed CVE-2026-43451 in the Linux kernel.

### Security
Fixed CVE-2026-43452 in the Linux kernel.

### Security
Fixed CVE-2026-43453 in the Linux kernel.

### Security
Fixed CVE-2026-43466 in the Linux kernel.

### Security
Fixed CVE-2026-43469 in the Linux kernel.

### Security
Fixed CVE-2026-43470 in the Linux kernel.

### Security
Fixed CVE-2026-43472 in the Linux kernel.

### Security
Fixed CVE-2026-43475 in the Linux kernel.

### Security
Fixed CVE-2026-43482 in the Linux kernel.

### Security
Fixed CVE-2026-43486 in the Linux kernel.

### Security
Fixed CVE-2026-43487 in the Linux kernel.

### Security
Fixed CVE-2026-46333 in the Linux kernel.

### Security
Fixed argument injection in toolbox.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-121-18867-381-132
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18867.381.132/lakitu/gpu_driver_versions.textproto)

### Announcement
This is an [LTS Refresh release.](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning#lts_refresh_releases)

### Fixed
Added support for NVIDIA driver v535.309.01.

### Fixed
Added support for NVIDIA driver v580.159.03.

### Fixed
Upgraded app-admin/google-guest-configs to v20251014.00.

### Fixed
Upgraded app-containers/docker-credential-helpers to v0.9.4.

### Fixed
Upgraded cos-gpu-installer to v2.7.1.

### Fixed
Upgraded net-libs/libnetfilter_conntrack to v1.1.1.

### Fixed
Upgraded net-libs/libtirpc to v1.3.7.

### Fixed
Upgraded net-nds/rpcbind to v1.2.8.

### Fixed
Upgraded sys-apps/acl to v2.3.2-r3.

### Fixed
Upgraded sys-apps/gentoo-functions to v1.7.4.

### Fixed
Upgraded sys-auth/pambase to v20251104.

### Fixed
Upgraded sys-libs/libcap to v2.77.

### Fixed
Upgraded sys-libs/libseccomp to v2.6.0-r3.

### Security
Fixed CVE-2026-43187 in the Linux kernel.

### Security
Fixed CVE-2026-46333 in the Linux kernel.

### Security
Fixed argument injection in toolbox.

### Change
Runtime sysctl changes:
- Added: net.ipv4.tcp_pingpong_thresh: 1

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-125-19216-395-31
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.12.85
[See List](https://storage.googleapis.com/cos-tools/19216.395.31/lakitu/gpu_driver_versions.textproto)

### Change
Switch cchost-* boards to legacy iptables.

### Fixed
Added support for NVIDIA driver v535.309.01.

### Fixed
Added support for NVIDIA driver v580.159.03.

### Fixed
Added support for NVIDIA driver v595.71.05.

### Fixed
Upgraded app-shells/dash to v0.5.13.4.

### Fixed
Upgraded cos-gpu-installer to v2.7.1.

### Fixed
Upgraded net-misc/rsync to v3.4.2.

### Security
Fixed CVE-2025-38584 in the Linux kernel.

### Security
Fixed CVE-2026-23473 in the Linux kernel.

### Security
Fixed CVE-2026-46333 in the Linux kernel.

### Security
Fixed argument injection in toolbox.

### https://cloud.google.com/feeds/gcp-release-notes.xmlcos-117-18613-613-15
[GPU Drivers](https://cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
COS-6.6.137
[See List](https://storage.googleapis.com/cos-tools/18613.613.15/lakitu/gpu_driver_versions.textproto)

### Fixed
Added support for NVIDIA driver v535.309.01.

### Fixed
Added support for NVIDIA driver v580.159.03.

### Fixed
Upgraded app-shells/dash to v0.5.13.4.

### Fixed
Upgraded cos-gpu-installer to v2.7.1.

### Security
Fixed CVE-2026-46333 in the Linux kernel.

### Security
Fixed argument injection in toolbox.

### Announcement
Google Distributed Cloud (software only) for VMware 1.35.100-gke.72 is now available for download. To upgrade, see [Upgrade clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading.md). Google Distributed Cloud 1.35.100-gke.72 runs on Kubernetes v1.35.3-gke.400.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready storage partners document to make sure the storage vendor has already passed the qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become available for use with GKE On-Prem API clients: the Google Cloud console, the gcloud CLI, and Terraform.

### Fixed
The following issues were fixed in 1.35.100-gke.72:
- Fixed an issue that prevented administrators from running cluster health checks and gathering diagnostics on non-advanced user clusters managed by an advanced admin cluster. You can successfully use gkectl diagnose on user clusters that are awaiting migration to advanced mode.

```
gkectl diagnose
```

### Announcement
Google Distributed Cloud (software only) for bare metal 1.35.100-gke.72 is now available for download. To upgrade, see [Upgrade clusters](https://cloud.google.com/feeds/how-to/upgrade). Google Distributed Cloud for bare metal 1.35.100-gke.72 runs on Kubernetes v1.35.3-gke.400.
After a release, it takes approximately 7 to 14 days for the version to become available for installations or upgrades with the GKE On-Prem API clients: the Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready storage partners document to make sure the storage vendor has already passed the qualification for this release of Google Distributed Cloud for bare metal.

### Fixed
The following issues were fixed in 1.35.100-gke.72:
- Fixed vulnerabilities listed in [Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities).
[Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities)

### Change
#### (2026-R20) Version updates
GKE cluster versions have been updated.
New versions available for upgrades and new clusters.
The following versions are now available for new GKE clusters, and for manual control plane upgrades and node upgrades for existing clusters. For more information about versioning and upgrades, see [GKE versioning and support](https://cloud.google.com/kubernetes-engine/versioning) and [About GKE cluster upgrades](https://cloud.google.com/kubernetes-engine/upgrades).

### Rapid channel
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

### Regular channel
- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now available in the Regular channel.
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

### Stable channel
- The following versions are now available in the Stable channel:

[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- The following versions are now available in the Extended channel:

[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- The following versions are now available:

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following node versions are now available:

[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

### No channel (deprecated)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

### Security
#### (2026-R20) Security updates
This release includes new GKE versions that use updated Container-Optimized OS images. These updated images are cumulative, incorporating security fixes from all Container-Optimized OS versions released since the previous GKE release.
To identify the specific vulnerabilities that were resolved in each updated Container-Optimized OS image, see the Security release notes for that image. The following table includes links to the release notes for each updated Container-Optimized OS image:
GKE version Container-Optimized OS version Details 1.36.0-gke.2253000 cos-beta-129-19506-120-52 [cos-beta-129-19506-120-52 release notes](https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m129#cos-beta-129-19506-120-52_)

### Change
#### (2026-R20) Version updates
- The following versions are now available in the Stable channel:

[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
- [1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.33.11-gke.1013000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13311)
[1.34.6-gke.1307000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1346)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

### Change
#### (2026-R20) Version updates
- Version [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353) is now available in the Regular channel.
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

#### (2026-R20) Version updates
- The following versions are now available in the Rapid channel:

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.36.0-gke.2253000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md#v1360)

#### (2026-R20) Version updates
- The following versions are now available:

[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- The following node versions are now available:

[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
- [1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)

### Change
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.33.12-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v13312)
[1.34.8-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md#v1348)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.35.5-gke.1000000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1355)

### Change
#### (2026-R20) Version updates
- The following versions are now available in the Extended channel:

[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
- [1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
- [1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
- [1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
- [1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)
[1.30.14-gke.2530000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13014)
[1.31.14-gke.1942000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13114)
[1.32.13-gke.1551000](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md#v13213)
[1.35.3-gke.1389002](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md#v1353)

Google Cloud's Agent for SAP version 3.14
Version 3.14 of Google Cloud's Agent for SAP is generally available (GA). This version introduces support for using a customer-managed encryption key (CMEK) to encrypt disks during disk snapshot based SAP HANA recovery, some logging and stability enhancements, and minor bug fixes.
For more information, see [What's new with Google Cloud's Agent for SAP](https://docs.cloud.google.com/sap/docs/agent-for-sap/whats-new).

When deploying your Secure Web Proxy instance as [next hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop), you can now configure the gateway to listen on all ports (from 1 to 65535). By using this feature, your proxy can automatically intercept and enforce security policies and rules to all outbound traffic, removing the need to manage specific port lists.

```
1
```


```
65535
```

This feature is supported in [Preview](https://cloud.google.com/products#product-launch-stages).

### Change
The following [Compliance Manager frameworks](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-frameworks) were updated:
- CIS Critical Security Controls v8 (version 8.0)
- CIS GCP Foundations Benchmark v3.0 (version 7.0)
- CSA Cloud Controls Matrix v4.0.11 (version 7.0)
- ISO 27001:2022 (version 9.0)
- NIST 800-53 Revision 5 (version 9.0)
- NIST Cybersecurity Framework 1.1 (version 8.0)
- PCI DSS v4.0.1 (version 6.0)
- Qatar National Information Assurance Standard v2.1 (version 6.0)
- SOC 2017 (version 7.0)

### Deprecated
The Security Command Center Enterprise service tier is deprecated. It will be shut down on May 21, 2027. By default, your organization will automatically move to the Premium service tier on that date.

### Feature
[Artifact guard](https://docs.cloud.google.com/security-command-center/docs/artifact-guard-overview) is available in [Preview](https://cloud.google.com/products#product-launch-stages) to the Security Command Center Enterprise and Premium tiers. Artifact guard is a service that helps you prevent the deployment of vulnerable packages throughout the software development lifecycle.

### Feature
[Risk Engine](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-supported-features) detects toxic combinations that are related to Cloud Build resources.

### Security
On May 20, 2026, we published a security bulletin for Apigee.
A vulnerability was found in Apigee ([CVE-2026-2264](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2026-2264)) where the IntegrationRegion parameter in the SetIntegrationRequest policy lacks validation, allowing for Server-Side Request Forgery (SSRF) and service account token exfiltration. The issue arises when an attacker can control a flow variable used for IntegrationRegion, leading to requests being sent to an attacker-controlled host with the service account token.

```
IntegrationRegion
```


```
SetIntegrationRequest
```


```
IntegrationRegion
```

Security bulletin published: [GCP-2026-034](https://docs.cloud.google.com/apigee/docs/security-bulletins/security-bulletins#gcp-2026-034)

### Announcement
BigQuery can re-execute instructions (queries) to try to proactively detect performance, correctness, or functional regressions. These re-executions will have no side effects and will happen with no additional cost or resource consumption. Data access logs may show bigquery-adminbot@system.gserviceaccount.com when BigQuery re-executes an instruction.

```
bigquery-adminbot@system.gserviceaccount.com
```

### Feature
[Python UDFs](https://docs.cloud.google.com/bigquery/docs/user-defined-functions-python) are now [Generally Available](https://cloud.google.com/products/#product-launch-stages) (GA).
You can use Python UDFs to implement a scalar function in Python and use it in a SQL query. Python UDFs let you install third-party libraries from the [Python Package Index (PyPI)](https://pypi.org/) and let you access external services using a [Cloud resource connection](https://docs.cloud.google.com/bigquery/docs/create-cloud-resource-connection).

### Feature
You can now use the [AI.AGG function](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-agg) to semantically aggregate unstructured input data based on natural language instructions. This feature is in [Preview](https://cloud.google.com/products#product-launch-stages).

```
AI.AGG
```

### Announcement
Managed Cloud Service Mesh using the TRAFFIC_DIRECTOR implementation in the stable channel now supports a limited implementation of the EnvoyFilter API. To learn about the supported fields, extensions, and how to use EnvoyFilter for features like local rate limiting see [Data plane extensibility with EnvoyFilter](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility).

```
TRAFFIC_DIRECTOR
```


```
EnvoyFilter
```


```
EnvoyFilter
```


```
EnvoyFilter
```

To troubleshoot any issue while configuring, see [Resolving data plane extensibility issues](https://docs.cloud.google.com/service-mesh/docs/troubleshooting/troubleshoot-data-plane-extensibility).

### Announcement
Cloud Service Mesh can now report a status code to indicate whether an Istio API is accepted or rejected. You can view the status code on the resource and mesh state. For more information see [MembershipState Error Codes](https://docs.cloud.google.com/service-mesh/docs/troubleshooting/troubleshoot-configuration#membershipstate_error_codes).

Confidential Space image 260500 is available. This image introduces support for [Intel Trust Authority (ITA)](https://docs.trustauthority.intel.com/main/articles/articles/ita/introduction.html) as an independent attestation verifier service for your workloads. This lets you verify the identity, the hardware state, and the software state of the Confidential Space environment directly using Intel's attestation service.

NotebookLM Enterprise: The Podcast API is deprecated
The [Podcast API](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/podcast-api) is deprecated. Google isn't allowlisting new customers.
This feature was available as GA with allowlist.

### Change
Supervised fine-tuning available for Gemini 3.1 Flash Lite (Preview)
Supervised fine-tuning is now available for limited support for the gemini-3.1-flash-lite model. During this period, model tuning for Gemini 3.1 Flash Lite is restricted to us-central1 and europe-west4 and tuned model serving is restricted to the us and eu multi-region endpoints.

```
gemini-3.1-flash-lite
```


```
us-central1
```


```
europe-west4
```


```
us
```


```
eu
```

See [About supervised fine-tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini-supervised-tuning) for more information.

### Change
Set media resolution at a Part-level for data when using supervised fine-tuning
Supervised fine-tuning now supports Part-level mediaResolution declarations for images, videos, and PDFs. Part-level media resolution declarations also support the MEDIA_RESOLUTION_ULTRA_HIGH level.

```
Part
```


```
mediaResolution
```


```
Part
```


```
MEDIA_RESOLUTION_ULTRA_HIGH
```

See the following media type–specific pages for more information:
- [Document tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tune_gemini/doc_tune)
- [Image tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tune_gemini/image_tune)
- [Video tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tune_gemini/video_tune)
[Document tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tune_gemini/doc_tune)
[Image tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tune_gemini/image_tune)
[Video tuning](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tune_gemini/video_tune)

All 1-year [committed use discounts (CUDs)](https://docs.cloud.google.com/vmware-engine/docs/cud) for Google Cloud VMware Engine ve1 SKUs are now End-of-Sale across the europe-west2 (London, UK) region. You can continue to use ve1 nodes with on-demand pricing. This change doesn't affect existing CUDs. You can also use ve2 nodes, including ve2 CUDs.

```
ve1
```


```
ve1
```


```
ve2
```


```
ve2
```

### Change
AlienVault USM Appliance: Version 27.0
- Refactored the code for the following action:

Get PCAP Files For Events

- Get PCAP Files For Events
- Get PCAP Files For Events

### Change
Protectwise: Version 6.0
- Refactored the code for the following action:

Get Pcap

- Get Pcap
- Get Pcap

### Change
Service Desk Plus: Version 9.0
- Refactored the code for the following action:

Create Alert Request

- Create Alert Request
- Create Alert Request

### Change
Service Desk Plus V3: Version 9.0
- Refactored the code for the following action:

Create Alert Request

- Create Alert Request
- Create Alert Request

### Change
ServiceNow: Version 66.0
- Updated the code for the following action:

Update Incident: Added support for updating reference fields.

- Update Incident: Added support for updating reference fields.
- Update Incident: Added support for updating reference fields.

### Change
Google Chronicle: Version 83.0
- Added support for filtering alerts by rule type to the following connector:

Google Chronicle - Chronicle Alerts Connector

- Google Chronicle - Chronicle Alerts Connector
- Google Chronicle - Chronicle Alerts Connector

### Change
Tanium: Version 20.0
- Integration: Added a partner header to all API requests.

Version 20260511.00 of the [guest agent](https://docs.cloud.google.com/compute/docs/images/guest-agent) is now available for all supported operating systems. This is a rebuild of version 20260423.01 announced in the [April 27, 2026 release notes](https://docs.cloud.google.com/compute/docs/images/guest-environment/release-notes#April_27_2026). It includes no additional changes and is released specifically to trigger a guest agent restart.

```
20260511.00
```


```
20260423.01
```

Between May 4, 2026, and May 11, 2026, the control plane accidentally sent an erroneous request to remove the core plugin. This caused the agent to stop functioning, which disrupted features that rely on it, such as SSH and Windows password resets. This package update automatically restarts the agent on instances where auto-update is enabled to resolve the issue.

Oracle Database@Google Cloud supports Oracle Cloud Infrastructure Goldengate. You can [create Goldengate deployments and connections](https://docs.cloud.google.com/oracle/database/docs/deploy-and-connect) to replicate and transform data between systems.
This feature is [Generally Available (GA)](https://cloud.google.com/products#product-launch-stages).

### Feature
Secret Manager and Parameter Manager integrate with the Agent Development Kit (ADK) to retrieve secrets and parameters securely at runtime. This integration prevents the exposure of sensitive credentials to the LLM context window or conversation history.
For more information, see the following resources:
- [Manage secrets for external services in Agent Development Kit](https://docs.cloud.google.com/secret-manager/docs/integrate-secret-manager-with-adk)
- [Parameter Manager integration with Agent Development Kit](https://docs.cloud.google.com/secret-manager/parameter-manager/docs/parameter-manager-adk-integration)
[Manage secrets for external services in Agent Development Kit](https://docs.cloud.google.com/secret-manager/docs/integrate-secret-manager-with-adk)
[Parameter Manager integration with Agent Development Kit](https://docs.cloud.google.com/secret-manager/parameter-manager/docs/parameter-manager-adk-integration)

### Announcement
Improvements to backtest API and recall metrics are now available with engine version v004.011. This includes support for Performance Targeting by number of parties required above threshold and a simplified recall metric calculation.

### v1.16.3
On May 19, 2026 we released an updated version of the Apigee hybrid software, v1.16.3.
- For information on upgrading, see [Upgrading Apigee hybrid to version v1.16.3](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/upgrade).
- For information on new installations, see [The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/big-picture).
[Upgrading Apigee hybrid to version v1.16.3](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/upgrade)
[The big picture](https://docs.cloud.google.com/apigee/docs/hybrid/v1.16/big-picture)
[Apigee release process](https://docs.cloud.google.com/apigee/docs/release/apigee-release-process#apigee-hybrid-container-images)

### Fixed
#### Fixed in this release

```
apigee-redis
```


```
CrashLoopBackOff
```


```
/bin/sh
```


```
/bin/cat
```

### Feature
Custom environment variables for Guardrail pods (guardrails.envVars)

```
guardrails.envVars
```

Starting in version v1.16.3, you can inject custom environment variables into Apigee hybrid Guardrail pods using the new guardrails.envVars property in overrides.yaml. This is most commonly used to set NO_PROXY (or no_proxy) so that Guardrail pods bypass a configured forward HTTP proxy when calling internal in-cluster endpoints such as the Kubernetes API server, which previously failed in restricted-network environments with a global httpProxy configured. The property is supported on Guardrail pods for the following components: apigee-datastore, apigee-env, apigee-ingress-manager, apigee-operator, apigee-org, apigee-redis, apigee-telemetry, and apigee-virtualhost.

```
guardrails.envVars
```


```
overrides.yaml
```


```
NO_PROXY
```


```
no_proxy
```


```
httpProxy
```


```
apigee-datastore
```


```
apigee-env
```


```
apigee-ingress-manager
```


```
apigee-operator
```


```
apigee-org
```


```
apigee-redis
```


```
apigee-telemetry
```


```
apigee-virtualhost
```

Example:

```
guardrails: envVars: NO_PROXY: 'kubernetes.default.svc,172.20.0.1'
```


```
guardrails: envVars: NO_PROXY: 'kubernetes.default.svc,172.20.0.1'
```

Certificate Manager (2nd gen) is available in [Preview](https://cloud.google.com/products#product-launch-stages). Certificate Manager (2nd gen) offers a unified control plane to observe, manage, and automate certificates across your organization.
For more information, see [Certificate Manager (2nd gen) overview](https://docs.cloud.google.com/certificate-manager/docs/v2/overview).

Google tag gateway for advertisers lets website owners host and deploy Google tags through Google Cloud. You can use a global external Application Load Balancer to route measurement traffic on your website through your domain for improved measurement data accuracy. This provides more reliable data for advertising campaign optimization.
For more information, see [Google tag gateway for advertisers](https://docs.cloud.google.com/load-balancing/docs/https#tag-gateway).

### Announcement
Config Connector version 1.151.0 is now available.

### Change
New Alpha Resources (Direct Reconciler):
- CloudDeployAutomation
- ComputeFutureReservation
- GKEHubMembershipBinding
- GKEHubNamespace
- GKEHubScopeRBACRoleBinding
- NetworkServicesWasmPlugin
- VertexAIDataLabelingJob

### Feature
New Fields:
- [MemorystoreInstance](https://cloud.google.com/config-connector/docs/reference/resource-docs/memorystore/memorystoreinstance)

Added spec.automatedBackupConfig field.
Added spec.crossInstanceReplicationConfig field.
Added spec.maintenanceVersion field.
Added status.observedState.availableMaintenanceVersions field.
Added status.observedState.crossInstanceReplicationConfig field.
Added status.observedState.effectiveMaintenanceVersion field.
Added status.observedState.pscAttachmentDetails field.
- Added spec.automatedBackupConfig field.
- Added spec.crossInstanceReplicationConfig field.
- Added spec.maintenanceVersion field.
- Added status.observedState.availableMaintenanceVersions field.
- Added status.observedState.crossInstanceReplicationConfig field.
- Added status.observedState.effectiveMaintenanceVersion field.
- Added status.observedState.pscAttachmentDetails field.
[MemorystoreInstance](https://cloud.google.com/config-connector/docs/reference/resource-docs/memorystore/memorystoreinstance)

```
MemorystoreInstance
```

- Added spec.automatedBackupConfig field.
- Added spec.crossInstanceReplicationConfig field.
- Added spec.maintenanceVersion field.
- Added status.observedState.availableMaintenanceVersions field.
- Added status.observedState.crossInstanceReplicationConfig field.
- Added status.observedState.effectiveMaintenanceVersion field.
- Added status.observedState.pscAttachmentDetails field.

```
spec.automatedBackupConfig
```


```
spec.crossInstanceReplicationConfig
```


```
spec.maintenanceVersion
```


```
status.observedState.availableMaintenanceVersions
```


```
status.observedState.crossInstanceReplicationConfig
```


```
status.observedState.effectiveMaintenanceVersion
```


```
status.observedState.pscAttachmentDetails
```

### Fixed
- [BigQueryDataTransferConfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquerydatatransfer/bigquerydatatransferconfig)

Fix resource duplication loop.

- Fix resource duplication loop.
- [ContainerCluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

Enable projectID to projectNumber transform in fields in Container LROs.
- Enable projectID to projectNumber transform in fields in Container LROs.
[BigQueryDataTransferConfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquerydatatransfer/bigquerydatatransferconfig)

```
BigQueryDataTransferConfig
```

- Fix resource duplication loop.
[ContainerCluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

```
ContainerCluster
```

- Enable projectID to projectNumber transform in fields in Container LROs.

### Feature
Gemini Enterprise: Data store for Crossbeam (Preview)
You can now connect Crossbeam data stores to Gemini Enterprise.
Support for Crossbeam data stores is in Public Preview. For more information, see [Connect Crossbeam](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/crossbeam).

### Feature
Gemini Enterprise: Use Gemini 3.5 Flash (GA)
Gemini 3.5 Flash is generally available (GA) in the Global, US, and EU regions with Gemini Enterprise. Users can select it in the model selector dropdown within the Gemini Enterprise app assistant and in Agent Designer.
As Gemini 3.5 Flash is the current GA Flash model, Gemini 2.5 Flash is removed from the model selector. Administrators can't toggle Gemini 3.5 Flash off.
For more information about feature controls, see [Manage features on the web app](https://docs.cloud.google.com/gemini/enterprise/docs/manage-web-app-features).

### Feature
NotebookLM Enterprise: Create slide decks and infographics
You can create slide decks and infographics using NotebookLM Enterprise. This feature is generally available (GA). For more information on the usage limits, see [Usage limits](https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/overview#usage-limits).

### Feature
Gemini 3.5 Flash is generally available (GA)
For details, see the [model specifications page](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-5-flash).

### Feature
Manage agent revisions and traffic splitting
Agent revisions and traffic splitting are now available in public preview. You can create immutable revisions of deployed agents, and split traffic between the different active revisions. This enables canary deployments and safe testing of new agent versions. For more information, see [Manage revisions and traffic](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/runtime/manage-revisions-and-traffic).

### Feature
Manage and discover agent skills with Skill Registry
Manage and discover agent skills with the Skill Registry, in public preview. This secure, private, and low-latency repository stores skills as self-contained packages, including instructions, code, and documentation, to enhance agent abilities.
For more information, see:
- [Skill Registry overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/skill-registry)
- [Create and manage skills](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/skill-registry/create-manage)
[Skill Registry overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/skill-registry)
[Create and manage skills](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/skill-registry/create-manage)

### Feature
Managed Agents API on Agent Platform released in Preview
The Managed Agents API on Agent Platform has been released in Preview.
This feature allows you to build and scale autonomous agents, including those built from configuration using the Antigravity harness. These agents run in a fully managed and isolated sandbox environment, equipped with tools and skills, and can be interacted with via a dedicated API.
For more information, see the following:
- [Managed Agents API on Agent Platform overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents)
- [Create and manage agents](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/create-manage)
- [Interact with agents](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/interact-with-agents)
- [Managed Agents API on Agent Platform sandbox environment](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/sandbox-environment)
[Managed Agents API on Agent Platform overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents)
[Create and manage agents](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/create-manage)
[Interact with agents](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/interact-with-agents)
[Managed Agents API on Agent Platform sandbox environment](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/managed-agents/sandbox-environment)

### Feature
AI Content Detection API available
[AI Content Detection](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/ai-content-detection) API is available in [Preview](https://cloud.google.com/products#product-launch-stages). For details see AI Content Detection.

### Feature
Provisioned Throughput for Gemini now supports latency SLA
Provisioned Throughput now provides a tokens per second latency SLA, covering generation speed from the first returned token to the last.
For more information, see the [Gemini Enterprise Agent Platform Online Inference Service Level Agreement (SLA)](https://cloud.google.com/vertex-ai/generative-ai/sla?e=48754805).

### Change
Memory Bank and Sessions support for multi-regional and global endpoints is in [Preview](https://cloud.google.com/products#product-launch-stages). For more, see [Supported locations for agents in Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/agent-locations#multi-regional_and_global_endpoints).

### Announcement
Google Cloud CCaaS 4.30
We've released version 4.30 of Google Cloud CCaaS.
The timing of the update to your instance depends on the deployment schedule that you have chosen. For more information, see [Deployment schedules](https://cloud.google.com/contact-center/ccai-platform/docs/deployment-schedules).

### Feature
Skip the IVR greeting message
You can now configure your instance to skip the IVR greeting message.
Administrators: A new Skip IVR Greeting option is available in the Settings > Languages & Messages > IVR-specific Messages section.
For more information, see [Customize IVR-specific messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/customizing_languages_recordings_messages#configure-ivr-specific-messages).

### Feature
Headless web SDK: advanced call scheduling is turned on by default
The useAdvancedCallScheduling parameter in the headless SDK is now set to true by default.

```
useAdvancedCallScheduling
```


```
true
```

### Feature
Queue status endpoint
The new queue status endpoint provides real-time data for leaf queues, including estimated wait times, agent availability, callback slot capacity, hours of operation, and holidays. This capability lets voice AI systems dynamically decide whether to escalate a call to a live agent or offer scheduled callback windows to the caller. You can access the queue status endpoint in the apps API: GET /apps/api/v1/queues/status.

```
GET /apps/api/v1/queues/status
```

For more information, see [The queue status endpoint](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-queue-status-endpoint).

### Feature
For call transfers in HubSpot, the ticket owner is automatically updated
When a call is transferred from one agent to another with a HubSpot integration, HubSpot tickets now automatically update to reflect the new ticket owner. This provides an accurate record of ownership throughout the interaction lifecycle. No configuration is required.

This release addresses the following issues:
- Fixed an issue where email messages in some queues displayed a blank white
panel when opened.
- Fixed an issue that occurred when a closed ticket ID was passed to HubSpot
using the SDK. The ticket wasn't reopened, resulting in new tickets being
created.
- Fixed an issue where agents could paste images into the chat adapter even
when the Allow agents to attach files setting was turned off.
- Fixed an issue where the agent adapter displayed generic error messages
instead of call failure reasons such as Busy or No answer.
- Fixed an issue where chat history wasn't deleted after a session ended,
causing the agent desktop to become unstable for high-volume agents.
- Fixed an issue where the NICE WFM ASCWS heartbeat timed out, causing agents
to appear inactive and disrupting adherence reporting.
- Fixed an issue where virtual agents unexpectedly disconnected during inbound
IVR calls, causing the calls to escalate to a human agent.
- Fixed an issue where customer utterances were missing from the Live
Transcript when conversations were transferred from a Dialogflow CX agent to
a human agent.
- Fixed an issue where, when an agent searched for a queue during a chat
transfer, the queue appeared with No logged in agents when agents were
available.
- Fixed an issue where launching a task virtual assistant during a chat caused
the agent's screen to freeze.
- Fixed an issue where call transcripts from CX Agent Studio agent
conversations were added to CRM records as garbled and unreadable text, with
repeated words and incorrect turn order.
- Fixed an issue where the Wait Time custom field on Zendesk tickets
displayed an incorrect value when using custom fields for Account and
Record.
- Fixed an issue where agents assigned a direct SMS-capable line didn't
receive visual notifications for incoming SMS chats in the agent adapter
while their status was set to Unavailable.
- Fixed an issue where some chat transcripts couldn't be downloaded from the
Completed Chats page.
- Fixed an issue where customer calls were unexpectedly abandoned during
payment transactions when DTMF inputs were provided.
- Fixed an issue where agents heard repeated call notification sounds during
active calls, even when no new call was assigned.
- Fixed an issue where only English IVR queues appeared when configuring
agent-specific deflection settings, even when other language queues were
available.
Fixed an issue where email messages in some queues displayed a blank white panel when opened.
Fixed an issue that occurred when a closed ticket ID was passed to HubSpot using the SDK. The ticket wasn't reopened, resulting in new tickets being created.
Fixed an issue where agents could paste images into the chat adapter even when the Allow agents to attach files setting was turned off.
Fixed an issue where the agent adapter displayed generic error messages instead of call failure reasons such as Busy or No answer.

```
Busy
```


```
No answer
```

Fixed an issue where chat history wasn't deleted after a session ended, causing the agent desktop to become unstable for high-volume agents.
Fixed an issue where the NICE WFM ASCWS heartbeat timed out, causing agents to appear inactive and disrupting adherence reporting.
Fixed an issue where virtual agents unexpectedly disconnected during inbound IVR calls, causing the calls to escalate to a human agent.
Fixed an issue where customer utterances were missing from the Live Transcript when conversations were transferred from a Dialogflow CX agent to a human agent.
Fixed an issue where, when an agent searched for a queue during a chat transfer, the queue appeared with No logged in agents when agents were available.

```
No logged in agents
```

Fixed an issue where launching a task virtual assistant during a chat caused the agent's screen to freeze.
Fixed an issue where call transcripts from CX Agent Studio agent conversations were added to CRM records as garbled and unreadable text, with repeated words and incorrect turn order.
Fixed an issue where the Wait Time custom field on Zendesk tickets displayed an incorrect value when using custom fields for Account and Record.
Fixed an issue where agents assigned a direct SMS-capable line didn't receive visual notifications for incoming SMS chats in the agent adapter while their status was set to Unavailable.

```
Unavailable
```

Fixed an issue where some chat transcripts couldn't be downloaded from the Completed Chats page.

Fixed an issue where customer calls were unexpectedly abandoned during payment transactions when DTMF inputs were provided.
Fixed an issue where agents heard repeated call notification sounds during active calls, even when no new call was assigned.
Fixed an issue where only English IVR queues appeared when configuring agent-specific deflection settings, even when other language queues were available.
- Fixed an issue where email messages in queues displayed a blank white panel
when opened.
- Fixed an issue where chat transcript and metadata files were generated as
empty files, causing API timeouts and blocking reporting pipelines.
- Fixed an issue where chat sessions that ended due to end-user inactivity
were marked as Disconnected by end user instead of Timeout: end user
stopped responding.
- Fixed an issue where agents couldn't receive more than 12 concurrent chats
despite being configured for up to 30.
- Fixed an issue where virtual agent calls were routed back to the original
queue instead of being handled as expected.
- Fixed an issue that occurred when a third party was added to a call. After
all participants left the call, the call still appeared to be connected.
- Fixed an issue where cascade conditions for agent queues didn't correctly
enforce the minimum number of available UK agents before allowing calls to
cascade from the US queue, resulting in calls being routed incorrectly.
- Fixed an issue where bulk user import incorrectly limited the chat
concurrency value to the global default, preventing valid per-agent settings
from being uploaded.
Fixed an issue where email messages in queues displayed a blank white panel when opened.
Fixed an issue where chat transcript and metadata files were generated as empty files, causing API timeouts and blocking reporting pipelines.
Fixed an issue where chat sessions that ended due to end-user inactivity were marked as Disconnected by end user instead of Timeout: end user stopped responding.
Fixed an issue where agents couldn't receive more than 12 concurrent chats despite being configured for up to 30.
Fixed an issue where virtual agent calls were routed back to the original queue instead of being handled as expected.
Fixed an issue that occurred when a third party was added to a call. After all participants left the call, the call still appeared to be connected.
Fixed an issue where cascade conditions for agent queues didn't correctly enforce the minimum number of available UK agents before allowing calls to cascade from the US queue, resulting in calls being routed incorrectly.
Fixed an issue where bulk user import incorrectly limited the chat concurrency value to the global default, preventing valid per-agent settings from being uploaded.

### Announcement
New [Managed Service for Apache Spark (formerly Dataproc on Compute Engine) subminor cluster image versions](https://docs.cloud.google.com/managed-spark/docs/concepts/versioning/image-version-lists#supported-dataproc-image-versions):
- 2.1.114-debian11, 2.1.114-rocky8, 2.1.114-ubuntu20, 2.1.114-ubuntu20-arm
- 2.2.82-debian12, 2.2.82-rocky9, 2.2.82-ubuntu22, 2.2.82-ubuntu22-arm
- 2.3.30-debian12, 2.3.30-ml-ubuntu22, 2.3.30-rocky9, 2.3.30-ubuntu22, 2.3.30-ubuntu22-arm

### Breaking
Managed Service for Apache Spark (formerly Dataproc on Compute Engine): The configuration for Spark shuffle partitions (spark.sql.shuffle.partitions) has changed from an integer to a string type.

```
spark.sql.shuffle.partitions
```

This change impacts image versions 2.3.30 and later in version 2.3, and 2.2.82 and later in version 2.2.

```
2.3.30
```


```
2.3
```


```
2.2.82
```


```
2.2
```

- Impact: This change only affects users who are programmatically setting the configuration in code using spark.conf.set() with an integer literal.

Impacted example: spark.conf.set("spark.sql.shuffle.partitions", 100)

- Impacted example: spark.conf.set("spark.sql.shuffle.partitions", 100)
- User action: Update your code to pass a string literal instead of an integer.

Example fix: spark.conf.set("spark.sql.shuffle.partitions", "100")

- Example fix: spark.conf.set("spark.sql.shuffle.partitions", "100")
- Not impacted: Setting the configuration via command-line arguments (e.g., spark-submit --conf spark.sql.shuffle.partitions=100), properties files, or Spark SQL commands (spark.sql("SET spark.sql.shuffle.partitions=100")) remains unaffected, as these methods naturally parse the input as strings.

```
spark.conf.set()
```

- Impacted example: spark.conf.set("spark.sql.shuffle.partitions", 100)

```
spark.conf.set("spark.sql.shuffle.partitions", 100)
```

- Example fix: spark.conf.set("spark.sql.shuffle.partitions", "100")

```
spark.conf.set("spark.sql.shuffle.partitions", "100")
```


```
spark-submit --conf spark.sql.shuffle.partitions=100
```


```
spark.sql("SET spark.sql.shuffle.partitions=100")
```

Oracle Database@Google Cloud lets you [enable Autonomous Data Guard for local peer databases](https://docs.cloud.google.com/oracle/database/docs/manage-dr-type).
This feature is [Generally Available (GA)](https://cloud.google.com/products#product-launch-stages).

[Vulnerability Assessment for Google Cloud](https://docs.cloud.google.com/security-command-center/docs/vulnerability-assessment-google-cloud) supports scanning XFS and NTFS disk partition types.

### Feature
The [December 2023 release notes](https://docs.cloud.google.com/vpc/docs/release-notes#December_19_2023) include a release note for the General Availability of Organization Policy Service custom constraints that provide more granular control over specific fields for some VPC resources.
This feature has been available in General Availability since December 19, 2023, but the release note was previously omitted.
For more information, see [Manage VPC resources by using custom organization policies](https://docs.cloud.google.com/vpc/docs/custom-constraints).

### Feature
You can cancel pending deletion requests for VPC Network Peering connections that are in consensus mode. This feature is available in Preview. For more information, see [Cancel a deletion request](https://docs.cloud.google.com/vpc/docs/using-vpc-peering#cancel-delete).

### Feature
You can [group reservations](https://docs.cloud.google.com/bigquery/docs/reservations-tasks#prioritize_idle_slots_with_reservation_groups) together to prioritize idle slot sharing within the group. Reservations within a reservation group share idle slots with each other before making them available to other reservations in the project, giving you more control over slot allocation for high-priority workloads. This feature is [generally available](https://cloud.google.com/products#product-launch-stages) (GA).

### Feature
You can now use a [custom organization policy](https://docs.cloud.google.com/bigquery/docs/custom-constraints) to allow or deny specific operations on workload management resources including reservations, assignments, capacity commitments, and BI reservations. This feature is in [Preview](https://cloud.google.com/products/#product-launch-stages).

### Feature
You can manage and version control SQL scripts and notebooks with [BigQuery Studio Git repositories](https://docs.cloud.google.com/bigquery/docs/git-repositories), which provide a streamlined, folder-based integration with remote Git repositories. This feature is in [preview](https://cloud.google.com/products/#product-launch-stages).

You can enable [row-affinity routing](https://docs.cloud.google.com/bigtable/docs/routing#row-affinity) for a standard app profile in the Google Cloud console. For more information, see [Create a standard app profile](https://docs.cloud.google.com/bigtable/docs/configuring-app-profiles#create-standard-app-profile).

The HTTP plugin version 1.5.2 is available in Cloud Data Fusion version 6.11.1. This release includes the following change:
- Fixed an issue in the HTTP plugin where OAuth2 token requests bypassed
configured proxies, causing connection failures in restricted environments.
Authentication requests now correctly route through the configured proxy
([PLUGIN-1956](https://cdap.atlassian.net/browse/PLUGIN-1956)).
[PLUGIN-1956](https://cdap.atlassian.net/browse/PLUGIN-1956)

Cloud Workstations supports resizing workstations' persistent directories. For more information, see [Resize workstation persistent directories](https://docs.cloud.google.com/workstations/docs/resize-workstation-persistent-directories).

### Announcement
Google Distributed Cloud (software only) for VMware 1.33.800-gke.75 is now available for download. To upgrade, see [Upgrade clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading.md). Google Distributed Cloud 1.33.800-gke.75 runs on Kubernetes v1.33.11-gke.100.
If you are using a third-party storage vendor, check the Google Distributed Cloud-ready storage partners document to make sure the storage vendor has already passed the qualification for this release.
After a release, it takes approximately 7 to 14 days for the version to become available for use with GKE On-Prem API clients: the Google Cloud console, the gcloud CLI, and Terraform.

### Fixed
The following issues were fixed in 1.33.800-gke.75:
- Fixed vulnerabilities listed in [Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/vulnerabilities).
- Fixed an issue that prevented administrators from running cluster health
checks and gathering diagnostics on non-advanced user clusters managed by an
advanced admin cluster. After the fix, you can use gkectl diagnose
on user clusters that are awaiting migration to advanced mode.

- Fixed an issue where the gkectl check-config command failed
during preflight checks when bundled ingress was disabled and the
loadBalancer.vips.ingressVIP field was left blank. This failure
occurred because the validation process incorrectly attempted to generate a
network configuration for test VMs using the empty VIP, resulting in an
invalid command (such as ip addr add /32) and causing test VM
initialization to fail.
[Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/vulnerabilities)

```
gkectl diagnose
```


```
gkectl check-config
```


```
loadBalancer.vips.ingressVIP
```


```
ip addr add /32
```

### Announcement
Google Distributed Cloud (software only) for bare metal 1.33.800-gke.75 is now available for download. To upgrade, see [Upgrade clusters](https://cloud.google.com/feeds/how-to/upgrade). Google Distributed Cloud for bare metal 1.33.800-gke.75 runs on Kubernetes v1.33.11-gke.100.
After a release, it takes approximately 7 to 14 days for the version to become available for installations or upgrades with the GKE On-Prem API clients: the Google Cloud console, the gcloud CLI, and Terraform.
If you use a third-party storage vendor, check the Google Distributed Cloud-ready storage partners document to make sure the storage vendor has already passed the qualification for this release of Google Distributed Cloud for bare metal.

### Fixed
The following issues were fixed in 1.33.800-gke.75:
- Fixed vulnerabilities listed in [Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities).
[Vulnerability fixes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vulnerabilities)

### Feature
[Spotlight Feature] Enhanced Data Export API general availability and improvements
The Data Export API is now GA and introduces significant security and capability improvements. This feature facilitates the bulk export of your security data from Google SecOps to a Google Cloud Storage bucket that you control, and it provides a more secure and scalable data archival experience than the legacy Data Export API feature.
Here's what's new:
- Advanced data filtering: the API now lets you additionally scope export jobs using namespaces and ingestion labels.
- Zero-trust security (customer-managed encryption keys): full integration with Google Cloud Key Management Service (KMS) ensures that all exported data is encrypted with customer-managed keys.
- Identity-aware extraction (RBAC): export jobs now inherit the data RBAC scope of users creating an export job, preventing unauthorized data extraction.

```
v1
```


```
v1alpha
```


```
POST https://chronicle.{region}.rep.googleapis.com/v1alpha/{parent}/dataExports
```


```
POST https://chronicle.{region}.rep.googleapis.com/v1/{parent}/dataExports
```

For more information, see [Data Export API (enhanced)](https://docs.cloud.google.com/chronicle/docs/reference/data-export-api-enhanced).

### Deprecated
The legacy Data Export API is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations) in favor of the [enhanced Data Export API](https://docs.cloud.google.com/chronicle/docs/reference/data-export-api-enhanced), which provides a more secure and scalable data archival experience. After June 18, 2026, legacy Data Export API won't work.

### Deprecated
The [fetchavailablelogtypes](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.dataExports/fetchavailablelogtypes) API endpoint is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations) in favor of the [list endpoint](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1beta/projects.locations.instances.logTypes/list). After June 18, 2026, the fetchavailablelogtypes API endpoint won't work.

```
fetchavailablelogtypes
```


```
list
```


```
fetchavailablelogtypes
```

### Deprecated
The updateDataExport endpoint in the [enhanced Data Export API](https://docs.cloud.google.com/chronicle/docs/reference/data-export-api-enhanced) is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations). The reduction in job queue times using the enhanced Data Export API has eliminated the need for the update functionality of the updateDataExport API endpoint. The updateDataExport endpoint was present in v1alpha only; it wasn't present in in v1beta or v1. After June 18, 2026, the updateDataExport API endpoint won't work. You can still cancel queued export jobs.

```
updateDataExport
```


```
updateDataExport
```


```
updateDataExport
```


```
updateDataExport
```

### Deprecated
The [logType](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.dataExports#DataExport:%7E:text=05%3A30%22.-,logType,to%20export.%20Format%3A%20projects/%7Bproject%7D/locations/%7Blocation%7D/instances/%7Binstance%7D/logTypes/%7BlogType%7D,-gcsBucket) field in the enhanced Data Export API is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations) in favor of the new (optional)includeLogTypes field, which supports an array of log types for data filtering. If left blank, the export job includes all log types by default. The logType field was present in v1alpha only; it wasn't present in in v1beta or v1. After June 18, 2026, the logType field is discontinued.

```
logType
```


```
includeLogTypes
```


```
logType
```


```
logType
```

### Feature
Enhanced Data Export API general availability and improvements
The Data Export API is now GA and introduces significant security and capability improvements. This feature facilitates the bulk export of your security data from Google SecOps to a Google Cloud Storage bucket that you control, and it provides a more secure and scalable data archival experience than the legacy Data Export API feature.
Here's what's new:
- Advanced data filtering: the API now lets you additionally scope export jobs using namespaces and ingestion labels.
- Zero-trust security (customer-managed encryption keys): full integration with Google Cloud Key Management Service (KMS) ensures that all exported data is encrypted with customer-managed keys.
- Identity-aware extraction (RBAC): export jobs now inherit the data RBAC scope of users creating an export job, preventing unauthorized data extraction.

```
v1
```


```
v1alpha
```


```
POST https://chronicle.{region}.rep.googleapis.com/v1alpha/{parent}/dataExports
```


```
POST https://chronicle.{region}.rep.googleapis.com/v1/{parent}/dataExports
```

For more information, see [Data Export API (enhanced)](https://docs.cloud.google.com/chronicle/docs/reference/data-export-api-enhanced).

### Deprecated
The legacy Data Export API is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations) in favor of the [enhanced Data Export API](https://docs.cloud.google.com/chronicle/docs/reference/data-export-api-enhanced), which provides a more secure and scalable data archival experience. After June 18, 2026, legacy Data Export API won't work.

### Deprecated
The [fetchavailablelogtypes](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.dataExports/fetchavailablelogtypes) API endpoint is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations) in favor of the [list endpoint](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1beta/projects.locations.instances.logTypes/list). After June 18, 2026, the fetchavailablelogtypes API endpoint won't work.

```
fetchavailablelogtypes
```


```
list
```


```
fetchavailablelogtypes
```

### Deprecated
The updateDataExport endpoint in the [enhanced Data Export API](https://docs.cloud.google.com/chronicle/docs/reference/data-export-api-enhanced) is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations). The reduction in job queue times using the enhanced Data Export API has eliminated the need for the update functionality of the updateDataExport API endpoint. The updateDataExport endpoint was present in v1alpha only; it wasn't present in in v1beta or v1. After June 18, 2026, the updateDataExport API endpoint won't work. You can still cancel queued export jobs.

```
updateDataExport
```


```
updateDataExport
```


```
updateDataExport
```


```
updateDataExport
```

### Deprecated
The [logType](https://docs.cloud.google.com/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.dataExports#DataExport:%7E:text=05%3A30%22.-,logType,to%20export.%20Format%3A%20projects/%7Bproject%7D/locations/%7Blocation%7D/instances/%7Binstance%7D/logTypes/%7BlogType%7D,-gcsBucket) field in the enhanced Data Export API is [deprecated](https://docs.cloud.google.com/chronicle/docs/deprecations) in favor of the new (optional)includeLogTypes field, which supports an array of log types for data filtering. If left blank, the export job includes all log types by default. The logType field was present in v1alpha only; it wasn't present in in v1beta or v1. After June 18, 2026, the logType field is discontinued.

```
logType
```


```
includeLogTypes
```


```
logType
```


```
logType
```

### Feature
Google Cloud NetApp Volumes Flex Unified service level is available with limited performance in the following regions:
- asia-northeast1 (Tokyo)
- europe-west2 (London)
- europe-west9 (Paris)
- us-west2 (Los Angeles)
- us-west3 (Salt Lake City)
asia-northeast1 (Tokyo)
europe-west2 (London)
europe-west9 (Paris)
us-west2 (Los Angeles)
us-west3 (Salt Lake City)
For more information about limited performance regions, see [Key features](https://docs.cloud.google.com/netapp/volumes/docs/discover/overview#key_features) and [Supported regions for Flex Unified limited performance](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels#supported_regions_for_flex_unified_limited_performance).

### Feature
Google Cloud NetApp Volumes Flex Unified service level is available in the following region:
- us-south1 (Dallas)
For more information about available regions, see [Supported regions](https://docs.cloud.google.com/netapp/volumes/docs/discover/service-levels#supported_regions).

### Feature
The replication features, such as [external](https://docs.cloud.google.com/netapp/volumes/docs/protect-data/replicate-ontap/overview#about_external_replication), in-region, cross-region, and cross-project replication, are generally available (GA) for Flex Unified volumes across all supported protocols. For more information, see [About volume replication](https://docs.cloud.google.com/netapp/volumes/docs/protect-data/about-volume-replication).

### Feature
ONTAP-mode supports S3 endpoints on NFS and SMB volumes, thick clone splitting, and advanced or diagnostic privilege levels as generally available (GA) features. The [backup](https://docs.cloud.google.com/netapp/volumes/docs/protect-data/about-backups) capabilities are also available in Preview. For more information, see [ONTAP-mode S3 multiprotocol support](https://docs.cloud.google.com/netapp/volumes/docs/discover/features#ontap-mode_s3_multiprotocol_support) and [Allowed ONTAP actions](https://docs.cloud.google.com/netapp/volumes/docs/ontap/manage-ontap#allowed_ontap_actions).

You can optimize Spanner Graph query performance by using factorized execution. If a graph pattern traversal generates duplicate intermediate results, add the @{factorize_mode} hint to the pattern traversal or at the query level to optimize the query.

```
@{factorize_mode}
```

For more information, see [Use factorized execution to optimize queries](https://docs.cloud.google.com/spanner/docs/graph/best-practices-tuning-queries#use-factorized-execution).

