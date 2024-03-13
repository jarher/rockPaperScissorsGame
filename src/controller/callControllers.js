export const callControllers = (controllers) => {
  controllers.forEach((obj) => {
   
    obj.hasOwnProperty("params")
      ? obj.controller(obj.params)
      : obj.controller();
  });
};
