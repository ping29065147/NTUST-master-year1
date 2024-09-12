// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;


// ---------------------------------------------------------------
// ERC20Interface 3-42
// ---------------------------------------------------------------
interface ERC20Interface {
    function totalSupply() external view returns (uint);
    function balanceOf(address tokenOwner) external  view returns (uint balance);
    function allowance(address tokenOwner, address spender) external  view returns (uint remaining);
    function transfer(address to, uint tokens) external returns (bool success);
    function approve(address spender, uint tokens) external returns (bool success);
    function transferFrom(address from, address to, uint tokens) external returns (bool success);
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

// ---------------------------------------------------------------
// SafeMath library 3-44
// ---------------------------------------------------------------
contract SafeMath {
    function safeAdd (uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }

    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a, "Invalid operation!");
        c = a - b;
    }

    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a==0 || c/a==b);
    }

    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

// ---------------------------------------------------------------
// ERC20 Content 3-52~3-58
// ---------------------------------------------------------------
contract myToken is ERC20Interface, SafeMath{

    // 3 optional rules
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public _totalSupply;

    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;

    constructor()
    {
        // optional rules
        name = "myToken";  // Name of the token 
        symbol = "DDOS";    // Symbol of the token
        decimals = 3;      // The minimum unit value of a token.

        _totalSupply = 123456000; 
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, _totalSupply);
        // faucet
        contractCreator = msg.sender;
    }

    // implement mandatory rules
    function totalSupply() public view override returns (uint)
    {
        return _totalSupply - balances[address(0)];
    }

    function balanceOf(address tokenOwner) public view override returns (uint balance)
    {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public override returns (bool success)
    {
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function allowance(address tokenOwner, address spender) public view override returns (uint remaining)
    {
        return allowed[tokenOwner][spender];
    }

    function approve(address spender, uint tokens) public override returns (bool success)
    {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    function transferFrom(address from, address to, uint tokens) public override returns (bool success)
    {
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }

    // ---------------------------------------------------------------
    // faucet function
    // ---------------------------------------------------------------
    address public contractCreator;
    mapping(address => uint256) timer;
    
    function faucet() public
    {
        uint256 tokens = 500;

        require(msg.sender != contractCreator, "Can not take tokens from yourself!");
        if (timer[msg.sender] > 0)
            require(block.timestamp - timer[msg.sender] > 30, "Please wait and try again later!");
        
        balances[contractCreator] = safeSub(balances[contractCreator], tokens);
        balances[msg.sender] = safeAdd(balances[msg.sender], tokens);
        emit Transfer(contractCreator, msg.sender, tokens);

        timer[msg.sender] = block.timestamp;
    }
     
    // ---------------------------------------------------------------
    // lottery game
    // ---------------------------------------------------------------
    mapping(uint => address) public tickets;
    uint256 public ticketCnt = 0;
    uint256 private timer2;
    address public Winner;

    function random() public view returns (uint)
    {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender)));
    }

    function betLottery() public
    {
        require(msg.sender != contractCreator, "banker can not join the bet!"); // 檢查是否為合約發起者
        require(balances[msg.sender] >= 100, "Insufficient balance!"); // 檢查購買者是否有足夠餘額

        // 進行交易
        balances[msg.sender] = safeSub(balances[msg.sender], 100);
        balances[contractCreator] = safeAdd(balances[contractCreator], 100);
        emit Transfer(msg.sender, contractCreator, 100);

        tickets[ticketCnt++] = msg.sender; // 紀錄已售出彩券與購買者
    }

    function Draw() public
    {
        require(msg.sender == contractCreator, "only the banker can draw!"); // 檢查是否為合約發起者
        require(ticketCnt > 0, "haven't sold any tickets!"); // 檢查是否有已售出彩券
        require(block.timestamp - timer2 > 120, "cooling time has not end yet!"); // 檢查上一次開獎時間

        // 隨機產生一個贏家
        uint randomNumber = random();
        Winner = tickets[randomNumber % ticketCnt];

        // 進行交易
        balances[contractCreator] = safeSub(balances[contractCreator], 90 * ticketCnt);
        balances[Winner] = safeAdd(balances[Winner], 90 * ticketCnt);
        emit Transfer(contractCreator, Winner, 90 * ticketCnt);

        ticketCnt = 0;
        timer2 = block.timestamp;        
    }

    function getAllPlayers() public view returns (address[] memory)
    {
        address[] memory ret = new address[](ticketCnt);

        for(uint i = 0; i < ticketCnt; i++)
        {
            ret[i] = tickets[i];
        }

        return ret;
    }
}