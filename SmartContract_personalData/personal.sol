pragma solidity 0.4.25;

contract PersonalData
{
    
    int main_balance;
    int spending;
    string name;
    string bankname;
    

    
    constructor() public
    {
        main_balance=0;
        spending=0;
        name="";
        bankname="";
    }
    
    function getMainBalance() view public returns(int)
    {
        return main_balance;
    }
    
     function getSpending() view public returns(int)
    {
        return spending;
    }
    
    function getname() view public returns(string)
    {
        return name;
    }
    
    function getbankname() view public returns(string)
    {
        return bankname;
    }
    
    
    function spend(int amt) public
    {
        main_balance = main_balance - amt;
        spending = spending + amt;
    }
    
    function deposit(int amt) public
    {
        main_balance = main_balance + amt;
    }
    
    function givename(string nm) public
    {
        name = nm;
    }
    
    function givebankname(string bnk) public
    {
        bankname = bnk;
    }
    
}