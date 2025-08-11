import { Pre, RawCode, highlight } from "codehike/code"
import { callout } from "./annotations/callout"

interface CodeProps {
  codeblock: RawCode
}

export async function Code({ codeblock }: CodeProps) {
  const highlighted = await highlight(codeblock, "github-dark")
  
  return (
    <Pre 
      code={highlighted} 
      handlers={[callout]} 
      className="
        border border-zinc-700/50 
        bg-zinc-900/95 
        rounded-lg 
        p-4 
        my-6 
        shadow-lg 
        shadow-black/20 
        backdrop-blur-sm
        overflow-x-auto
        [&_pre]:!bg-transparent
        [&_pre]:!p-0
        [&_pre]:!m-0
        [&_code]:!bg-transparent
        [&_code]:!p-0
        [&_code]:!m-0
        [&_code]:!text-sm
        [&_code]:!leading-relaxed
        [&_.ch-codeblock]:!bg-transparent
        [&_.ch-codeblock]:!p-0
        [&_.ch-codeblock]:!m-0
        [&_.ch-codegroup]:!bg-transparent
        [&_.ch-codegroup]:!p-0
        [&_.ch-codegroup]:!m-0
        [&_.ch-code-scroll-parent]:!bg-transparent
        [&_.ch-code-scroll-parent]:!p-0
        [&_.ch-code-scroll-parent]:!m-0
        [&_.ch-code-scroll-parent]:!rounded-none
        [&_.ch-code-scroll-parent]:!border-none
        [&_.ch-code-scroll-parent]:!shadow-none
      " 
    />
  )
}
