#!/usr/bin/env python3
"""Module to list all from mongodb collection
"""


def list_all(mongo_collection):
    """Return all documents from a mongodb collection
    """
    return list(mongo_collection.find())
