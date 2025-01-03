export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 font-[family-name:var(--font-geist-sans)] mt-10">
      <main className="max-w-3xl w-full space-y-8 text-center font-light">
        {/* Title Section */}
        <h1 className="text-4xl font-bold">
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
          What Exactly is a ZK?
        </code>
        </h1>
        
        {/* Author and Date Section */}
        <div className="text-muted-foreground space-y-1 text-black">
          <p>Author: Marc Karimi</p>
          <p>Date: January 5th, 2025</p>
        </div>
        
        {/* Separator */}
        <hr className="border-border my-8" />
        
        {/* Content Container */}
        <div className="prose dark:prose-invert mx-auto">
          {/* Your content will go here */}
          <h1 className="text-left text-3xl mt-5">
            1 - Introduction.
          </h1>
          <p className="text-left mt-5"> Hello. Welcome to the first iteration of What ZKs are. This is a blog that I'm writing to help me personally understand and keep as a resource. </p>
          <h1 className="text-left text-3xl mt-5">
            2 - Types of ZKs.
          </h1>
          <p className="text-left mt-5"> There are many types of ZKs. I'll be going over some of the most popular ones. </p>
          <h1 className="text-left text-3xl mt-5">
            3 - zk-SNARKS and zk-STARKS.
          </h1>
          <p className="text-left mt-5"> ZK Proofs are the most common type of ZK. They are a way to prove that a statement is true without revealing any information about the statement. </p>
          <h1 className="text-left text-3xl mt-5">
            4 - Mathematics Involved.
          </h1>
          <p className="text-left mt-5"> ZK Rollups are a type of ZK that is used to prove that a statement is true without revealing any information about the statement. </p>
          <h1 className="text-left text-3xl mt-5">
            5 - Pros and Cons of zk-SNARKS.
          </h1>
          <p className="text-left mt-5"> ZK Snarks are a type of ZK that is used to prove that a statement is true without revealing any information about the statement. </p>
          <h1 className="text-left text-3xl mt-5">
            6 - Pros and Cons of zk-STARKs.
          </h1>
          <p className="text-left mt-5"> ZK Rollups are a type of ZK that is used to prove that a statement is true without revealing any information about the statement. </p>
          <h1 className="text-left text-3xl mt-5">
            7 - Current State of zk-SNARKS and zk-STARKS.
          </h1>
          <p className="text-left mt-5"> ZK Rollups are a type of ZK that is used to prove that a statement is true without revealing any information about the statement. </p>
          <h1 className="text-left text-3xl mt-5">
            8 - Statistics related.
          </h1>
          <p className="text-left mt-5"> ZK Rollups are a type of ZK that is used to prove that a statement is true without revealing any information about the statement. </p>
          <h1 className="text-left text-3xl mt-5">
            9 - Conclusion.
          </h1>
          <p className="text-left mt-5"> ZK Rollups are a type of ZK that is used to prove that a statement is true without revealing any information about the statement. </p>
        </div>
      </main>
    </div>
  );
}
