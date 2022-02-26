const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(                        
      ["Woman", "Aang", "Meta"],       
      ["https://gateway.pinata.cloud/ipfs/QmTdNy8E8URmJV6tdcTUwB9QPap7xnrH7MyBRth7ryTuYy", 
      "https://gateway.pinata.cloud/ipfs/QmetNRFG8t55zndy9WDBZfLcW37FGSQYELYAt3poiRWTbL", 
      "https://gateway.pinata.cloud/ipfs/QmbjasGHWhDyizG1YJYZAjiLp2gPtVs8ktGiqYnfbj5Di4"],
      [3000, 1200, 500],                    
      [500, 200, 50],
      "Elon Musk", // Boss name
      "https://gateway.pinata.cloud/ipfs/Qmens3TSDu2rpf7KSdoNGZdnLkN9CnS2mX7eyt6KUF4uNi", // Boss image
      10000, // Boss hp
      100 // Boss attack damage
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();