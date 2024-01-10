from json import load, dump

def read_db(model, db_path: str) -> list:
  """This function loads the database and returns it as a python list

  Args:
    model: This is the model that will be used to validate the json data
    db_path (str): This is the path to the database (json file)

  Returns:
    list: a list of python dictionaries which have been validated by the model
  """
  with open(db_path) as json_file:
    return [model.model_validate_json(entity) for entity in load(json_file)]
  

def save_db(db: list, db_path: str) -> None:
  """This function takes a new, updated database and inserts the new data into the json file
  Args:
    db (list): This is the new, updated db which is ready to be inserted into the json file
    db_path (str): This is the path to the database (json file)

  Returns:
    None
  """
  with open(db_path, "w") as json_file:
    dump([entity.model_dump() for entity in db], json_file, indent=4)

