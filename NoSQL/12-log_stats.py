#!/usr/bin/env python3
"""Module to log stats from mongodb
"""

from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    print(f"{collection.estimated_document_count()} logs")
    print("Methods:")

    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    get_status_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{get_status_count} status check")
