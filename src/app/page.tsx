import LoaderComponent from "@/components/LoaderComponent";
import PostListComponent from "@/components/PostList/PostListComponent";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <h1>hello word</h1>

      <Suspense fallback={<LoaderComponent/>}>
        <PostListComponent />
      </Suspense>
      
    </>
  );
}
