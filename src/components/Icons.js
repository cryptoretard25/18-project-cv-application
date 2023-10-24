import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faUser,
  faGraduationCap,
  faChevronDown,
  faChevronUp,
  faBriefcase,
  faFloppyDisk,
  faBan,
  faCirclePlus,
  faEye,
  faEyeSlash,
  faPlus,
  faMinus,
  faCheck,
  faXmark,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export function Thrash({ size }) {
  return <FontAwesomeIcon icon={faTrashCan} size={size} />;
}

export function User({ size }) {
  return <FontAwesomeIcon icon={faUser} size={size} />;
}

export function Cap({ size }) {
  return <FontAwesomeIcon icon={faGraduationCap} size={size} />;
}

export function Briefcase({ size }) {
  return <FontAwesomeIcon icon={faBriefcase} size={size} />;
}

export function ArrowDown({ size, onClick }) {
  return (
    <FontAwesomeIcon
      icon={faChevronDown}
      size={size}
      onClick={onClick}
      cursor="pointer"
    />
  );
}

export function ArrowUp({ size, onClick }) {
  return (
    <FontAwesomeIcon
      icon={faChevronUp}
      size={size}
      onClick={onClick}
      cursor="pointer"
    />
  );
}

export function Save({ size }) {
  return <FontAwesomeIcon icon={faFloppyDisk} size={size} />;
}

export function Cancel({ size }) {
  return <FontAwesomeIcon icon={faBan} size={size} />;
}

export function Add({ size }) {
  return <FontAwesomeIcon icon={faCirclePlus} size={size} />;
}

export function OpenedEye({ size }) {
  return <FontAwesomeIcon icon={faEye} size={size} />;
}

export function ClosedEye({ size }) {
  return <FontAwesomeIcon icon={faEyeSlash} size={size} />;
}

export function Plus({ size }) {
  return <FontAwesomeIcon icon={faPlus} size={size} />;
}

export function Minus({ size }) {
  return <FontAwesomeIcon icon={faMinus} size={size} />;
}

export function Accept({ size }) {
  return <FontAwesomeIcon icon={faCheck} size={size} />;
}

export function Close({ size, onClick, className }) {
  return (
    <FontAwesomeIcon icon={faXmark} size={size} onClick={onClick} className={className} />
  );
}

export function Remove({ size, onClick, className }) {
  return (
    <FontAwesomeIcon
      icon={faTrash}
      size={size}
      onClick={onClick}
      style={{ padding: "1px" }}
      className={className}
    />
  );
}

export function Edit({ size, onClick, className }) {
  return (
    <FontAwesomeIcon icon={faPen} size={size} onClick={onClick} className={className} />
  );
}
