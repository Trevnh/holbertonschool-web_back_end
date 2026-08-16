#!/usr/bin/env python3
"""Module to update topic in mongodb
"""


def update_topics(mongo_collection, name, topics):
    """Function to update topic with given name in mongodb
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
