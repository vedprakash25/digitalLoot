import { useRef, useState, useEffect } from "react";

type UseOutsideAlerterProps = {
  isOpen: boolean;
  onOutsideClick: () => void;
};

export function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  props: UseOutsideAlerterProps
) {
  const { isOpen, onOutsideClick } = props;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref, onOutsideClick]);
}
