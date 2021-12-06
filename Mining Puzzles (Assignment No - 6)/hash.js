
function combine_string(string1, string2){
  var x = string1 + " " + string2;
  return x.trim();
}

function solve_puzzle(input, n){
  var restriction = "0".repeat(n);
  var solved = false
  var nonce = 0
  var hashFunction = new Hashes.SHA256()

  while(!solved){
    nonce = nonce +1;
   solved = hashFunction.hex(combine_string(input, nonce.toString())).toUpperCase().substring(0, n) == restriction;
  }
  return nonce;
}

function solve_hash_puzzle(){
  var n = parseInt(document.getElementById('hash_restriction').value);
  var input_data= document.getElementById('hash_input').value.toString().trim();
  var nonce = solve_puzzle(input_data, n);
  document.getElementById('nonce').value = nonce;
}

function evaluate_puzzle(){
  var n = parseInt(document.getElementById('hash_restriction').value);
  var hash_value = document.getElementById('hash_output').innerHTML.substring(0, n);
  var restriction = "0".repeat(n);
  if(hash_value==restriction){
    document.getElementById("outbox").style.backgroundColor="#accb4d";
  }
  else{
    document.getElementById("outbox").style.backgroundColor="#dca3a3";
  }
}

function calc_puzzle(){
  var input = document.getElementById('hash_input').value.toString().trim();
  var nonce = document.getElementById('nonce').value.toString().trim();
  var hashvalue = new Hashes.SHA256().hex(combine_string(input, nonce)).toUpperCase().substring(0, 8);
  document.getElementById('hash_output').innerHTML = hashvalue;
}

function reset_output(){
  document.getElementById('hash_output').innerHTML='';
  document.getElementById("outbox").style.backgroundColor="#eaeced";
}


function lbr(input, n){
  if(n<1){return input}
  else{
    var k = Math.floor(input.length/n)
    var even = ((input.length/n)-Math.floor(input.length/n) >0);
    var text = input.substr(0, n)
    for (i = 1; i < k+1; i++) {
      if(input.substr(i*n, n).length>0){ text += ("<br>"+input.substr(i*n, n));}
    }
    return text;
  }
}

function reset_hash(){
    document.getElementById('md5').innerHTML='';
    document.getElementById('sha1').innerHTML='';
    document.getElementById('sha256').innerHTML='';
    document.getElementById('sha512').innerHTML='';
}

function re_calc_hash(){
  if(document.getElementById('md5').innerHTML==""){}
  else{calc_hash();}
}

function calc_hash(){
  var n = parseInt(document.getElementById('n').innerHTML);
  var input = document.getElementById('hash_input').value.trim();
  var hs = new Hashes.MD5().hex(input).toString().toUpperCase();
  document.getElementById('md5').innerHTML = lbr(new Hashes.MD5().hex(input).toString().toUpperCase(),n);
  document.getElementById('sha1').innerHTML = lbr(new Hashes.SHA1().hex(input).toString().toUpperCase(),n);
  document.getElementById('sha256').innerHTML = lbr(new Hashes.SHA256().hex(input).toString().toUpperCase(),n);
  document.getElementById('sha512').innerHTML = lbr(new Hashes.SHA512().hex(input).toString().toUpperCase(),n);
}
