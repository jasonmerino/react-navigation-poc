import React from "react";

function augmentWithDeepLinkPatterns(Nav, processor) {
  const previousGetActionForPathAndParams =
    Nav.router.getActionForPathAndParams;
  Object.assign(Nav.router, {
    getActionForPathAndParams(path, params) {
      const result = processor(path, params);
      if (result) {
        return result;
      }
      return previousGetActionForPathAndParams(path, params);
    }
  });
}

const paths = [];

function createScreen(screen, path) {
  if (!path) {
    console.error(
      `Path is required for screen: ${screen && screen.displayName}`
    );
  } else {
    if (paths.indexOf(path) !== -1) {
      console.error(`Multiple paths defined for url: ${path}`);
    }
    paths.push(path);
  }
  return {
    screen,
    path
  };
}

function componentizeNavigator(Nav) {
  return () => <Nav uriPrefix="rnavpoc://" />;
}

const pageURLPatterns = {
  P_PAGE: /^(.+)\/p([0-9]+)(\?.*)*$/
};

export default {
  augmentWithDeepLinkPatterns,
  createScreen,
  pageURLPatterns,
  componentizeNavigator
};
