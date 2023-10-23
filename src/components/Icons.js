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

export function Save({size}){
  return <FontAwesomeIcon icon={faFloppyDisk} size={size}/>;
}

export function Cancel({size}){
  return <FontAwesomeIcon icon={faBan} size={size} />;
}