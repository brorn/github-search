import { useRouter } from "next/router";
import { useState } from "react";

const useHeader = () => {
  const router = useRouter();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const onClick = (route: string) => {
    router.push(route);
  };
  return { mobileMoreAnchorEl, handleOpen, handleClose, onClick };
};

export default useHeader;
