import { task, types } from "hardhat/config";
import type { HardhatRuntimeEnvironment } from "hardhat/types";
import { TestContract } from "../build/types";

task("tsct", "test contract")
  .addOptionalParam(
    "contr",
    "contract address",
    "0x2B7835AE05C9Cb5EF086e3BFe249e2658b450E8d",
    types.string
  )
  .setAction(event_listen);

async function event_listen(
  args: { contr: string },
  hre: HardhatRuntimeEnvironment
) {
  try {
    const myContr = (await hre.ethers.getContractAt(
      "TestContract",
      args.contr
    )) as TestContract;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const a1 = await myContr.get_test();
      console.log("a1: ", a1);

      const tx = myContr.insert_test();

      let a2 = await myContr.callStatic.get_test();
      while (a2 <= a1) {
        a2 = await myContr.get_test();
      }
      console.log("a2: ", a2);

      const res = await (await tx).wait();
      console.log("res: ", res);
    }
  } catch (e) {
    console.log("error: ", e);
  }
}
