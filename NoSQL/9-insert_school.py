#!/usr/bin/env python3
"""Module to insert document into mongodb collection
"""


def insert_school(mongo_collection, **kwargs):
    """Function to insert document into mongodb collection
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
