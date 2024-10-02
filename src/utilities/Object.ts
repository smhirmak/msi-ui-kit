const Object = {
  GetNestedValue: (obj, key) => {
    const properties = key.split('.');
    let value = obj;
    properties.forEach(prop => {
      if (!value) return null;
      value = value[prop];
    });
    return value;
  },
};

export default Object;
