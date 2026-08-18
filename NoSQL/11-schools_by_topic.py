#!/usr/bin/env python3
"""Module to find school based on topic
"""


def schools_by_topic(mongo_collection, topic):
    """Function to find schools by a given topic
    """
    return mongo_collection.find({"topics": topic})
