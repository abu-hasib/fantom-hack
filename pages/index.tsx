import { ConnectWallet, useSDK } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import tree from "./why-plant-trees.jpg";

const Home: NextPage = () => {
  const sdk = useSDK();
  const [value, setValue] = useState(0);
  const [target, setTarget] = useState(0);

  const onAct = async () => {
    const txRes = sdk?.wallet.transfer(
      "0xFAaa46d9d85E8C256deFcB2A4D2F32E61469AD34",
      value
    );
    if ((await txRes)?.receipt) {
      setTarget(value);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Welcome to Phantom a Change</h1>
        <p>You can donate to our causes below</p>
        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.donate}>
          <div>
            <h1>Plant a tree</h1>
            <Image src={tree} alt="trees" width={200} height={200} />
          </div>
          <div>
            <span>$</span>
            <input
              type="number"
              min="0"
              step="any"
              defaultValue={1}
              onChange={({ target }) => setValue(Number(target.value))}
              value={value}
            />
          </div>

          <h2 className={styles.target}>Raised so far: ${target}</h2>

          <button onClick={onAct}>Donate</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
