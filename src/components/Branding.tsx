import { Group, Title } from "@mantine/core";
import React from "react";

const Branding: React.FC = () => {
  return (
    <>
      <Group>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 128 128"
          style={{ color: "#38369A", fill: "#38369A" }}
        >
          <path d="M54.8 5.1C49.9 7.9 46 10.5 46 11c0 2.5 2.9 1.8 10-2.4L64 4l25.7 14.9 25.8 14.8v60.5l-17 9.9c-9.3 5.4-17.1 10.3-17.3 10.9-1.1 3.2 4.3 1 20.4-8.4l17.9-10.4.3-32 .2-32-5.7-3.5C101.6 21.2 66.4 1.1 65 .6c-.8-.3-5.4 1.7-10.2 4.5zM24.5 22.4l-16 9.4v64.4l27.7 16 27.8 16 7.5-4.2c4.1-2.3 7.5-4.6 7.5-5.1 0-2.4-3.4-1.8-8.9 1.5l-6 3.7-25.8-15-25.8-14.9V33.8l15.8-9.1c14.4-8.3 17.5-10.9 13.6-11.4-.8-.1-8.6 4-17.4 9.1z" />
        </svg>
        <Title
          sx={(theme) => ({
            color: theme.colors.quaternary[0],
            fontSize: theme.fontSizes.xl2,
          })}
          order={2}
        >
          CompanyFlow
        </Title>
      </Group>
    </>
  );
};

export default Branding;
