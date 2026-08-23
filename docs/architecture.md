# Production Architecture

```text
PHCs / District Hospitals
        |
        | inventory, beds, attendance, utilization
        v
Firebase / Cloud Run ingestion APIs
        |
        +----> BigQuery (national analytics)
        |
        +----> District data stores
        |          |
        |          +--> local training / feature extraction
        |                    |
        |                    v
        |             federated model updates
        |                    |
        +--------------------+--> Vertex AI Model Registry/Serving
                                      |
                                      v
                         Demand + stock-out predictions
                                      |
                    +-----------------+----------------+
                    |                                  |
                    v                                  v
              Alert engine                    Redistribution engine
                    |                                  |
                    +------------------+---------------+
                                       v
                              Gemini Operations Copilot
                                       |
                                       v
                              Web / mobile dashboard
```

## Recommended production services
- **Firebase Authentication**: role-based access for national, state, district and PHC users.
- **Firestore**: operational inventory, beds and attendance records.
- **BigQuery**: historical analytics and national-scale reporting.
- **Cloud Run**: API and AI orchestration services.
- **Vertex AI**: model training, registry and serving.
- **Gemini API / Vertex AI Gemini**: multilingual operations assistant, explanations and summaries.
- **Pub/Sub + Cloud Functions**: event-driven low-stock alerts and synchronization.
- **Google Maps Platform**: route-aware redistribution planning.

## Federated learning approach
Each district keeps raw patient/resource data locally. A district trainer produces model updates or aggregate statistics. Only approved model updates are sent to a central aggregation service. The central model is then redistributed to districts. In a production deployment, add secure aggregation, differential privacy and strict governance.
