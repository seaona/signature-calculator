function getSignature() {
  const func = document.getElementById("func-input").value;
  const reslong = ethers.utils.id(func);
  const res4bytes = ethers.utils.id(func).substring(0, 10);
  document.getElementById("result-long").innerText = reslong;
  document.getElementById("result-4bytes").innerText = res4bytes;
}