import { Flex, Text } from "@radix-ui/themes";
import React, { FC, ReactNode } from "react";

import groupSystemImage from "src/assets/images/group_system.png";

import { DESCRIPTION_LIST } from "./constants";

type IProps = {
  children: ReactNode;
};

const AuthorizedLayout: FC<IProps> = ({ children }) => {
  return (
    <Flex className="w-full flex flex-col-reverse md:flex-row h-screen">
      <Flex
        direction="column"
        className="bg-gray2 gap-24 flex-[0.5] p-8"
        align="center"
        justify="center">
        <img
          src={groupSystemImage}
          alt="Group System"
          className="object-contain max-w-[380px]"
        />
        <Flex direction="column" className="gap-10 max-w-[590px]">
          {DESCRIPTION_LIST.map((record) => (
            <Flex key={record?.title} className="gap-5">
              <img
                src={record?.image}
                alt={record?.title}
                className="object-contain w-14 h-fit mt-1"
              />
              <Flex className="flex-1" direction="column">
                <Text className="text-[32px] font-semibold text-white">
                  {record?.title}
                </Text>
                <Text className="text-sm text-white">
                  {record?.description}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        className="bg-white gap-24 flex-[0.5] p-4 md:p-8"
        align="center"
        justify="center">
        {children}
      </Flex>
    </Flex>
  );
};

export default AuthorizedLayout;
