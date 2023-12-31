"use client";
import { useEffect } from "react";
import Tools from "@/app/components/Toolbar/Tools";
import Lang from "@/app/components/Lang/Lang";
import TestText from "@/app/components/TestText/TestText";
import Loading from "@/app/components/Reusable/Laoding";
import Result from "@/app/components/Result/Result";
import { useAppCtx } from "./context/AppContext";
import { useTestCtx } from "./context/TestContext";

export default function Home() {
  const { splash } = useAppCtx();
  const { goToResult, setGoToResult, finishTest, handleFocus,setIsRunning } = useTestCtx();

  useEffect(() => {
    if (finishTest) {
      setTimeout(() => {
        setGoToResult(true);
        setIsRunning(false);
      }, 10);
    }
  }, [finishTest]);
  if (splash) {
    return <Loading />;
  } else if (goToResult) {
    return <Result />;
  }
  return (
    <main className="flex flex-col min-w-full items-center p-4">
      <Tools />
      <Lang />

      <TestText onClick={handleFocus} />
    </main>
  );
}
