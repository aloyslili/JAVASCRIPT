(function () {
  let yang = {
    createElement(elementName, elementAttributes) {
      let element = document.createElement(elementName);
      for (let attributeName in elementAttributes) {
        element.setAttribute(attributeName, elementAttributes[elementAttributes]);
      }
      return element;
    },
  };

  window.$yang = yang;
})();
