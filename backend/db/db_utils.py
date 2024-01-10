from json import load, dump

def read_db(model, db_path: str):
  with open(db_path) as json_file:
    return [model.model_validate_json(entity) for entity in load(json_file)]
  

def save_db(model, db: list, db_path: str):
  validated_db: list[model] = db
  with open(db_path, "w") as json_file:
    dump([entity.model_dump() for entity in validated_db], json_file, indent=4)

