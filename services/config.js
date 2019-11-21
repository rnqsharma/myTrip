((configRepo)=>{
  configRepo.SetConfig = (paypal)=>{
    console.log("Config Hit");
    var config = {
      "host" : "api.sandbox.paypal.com",
      "port" : "",
      "client_id" : "AbIQl023LqhvpvogwSR8IKId-gUIWtroWu6d545aIWszcB4F124q6GjUfG6gwzhNxWB4NtlFs-ZPJqoV",  // your paypal serverlication client id
      "client_secret" : "EGADUeZWgLQnr6CrBbkMOAILxz6CCKa98CUVJ9WlkP2Xipk0GQVsgNTiB-M7K7SJ_bg8QfXq6K-QLACy" // your paypal serverlication secret id
    }
    paypal.configure(config);
  };
})
(
  module.exports
);
