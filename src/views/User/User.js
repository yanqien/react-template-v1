import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import jiGouDF from "@/api/zhikong/jiGouDF";
const User = (props) => {
  const { userId } = useParams();

  const isEffectRun = useRef(false);

  useEffect(() => {
    if (isEffectRun.current) return; // 如果已经执行过，则直接返回

    // 执行副作用逻辑
    console.log("Effect executed");

    jiGouDF.getjiGouDF();

    // 标记为已执行
    isEffectRun.current = true;
  }, []); // 空依赖项数组，表示只在组件挂载时执行一次

  return <h2>User ID: {userId}</h2>;
};
export default User;
