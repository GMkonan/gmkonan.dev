import React, { ReactNode } from "react";
import styled from "styled-components";

interface BreadcrumbsProps {
    children: ReactNode
}

interface CrumbProps {
    href: string
    children: ReactNode
}

const Breadcrumbs = ({ children }: BreadcrumbsProps) => (
  <nav aria-label="BreadCrumb">
    <BreadCrumbList>{children}</BreadCrumbList>
  </nav>
);

const BreadCrumbList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Crumb = ({ href, children }: CrumbProps) => (
  <CrumbWrapper>
    <CrumbLink href={href}>{children}</CrumbLink>
  </CrumbWrapper>
);

const CrumbWrapper = styled.li`
  display: inline-block;
  --spacing: 8px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);
    &:before {
      content: '';
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      height: 0.8em;
      color: #5f6c7b;
      margin-right: var(--spacing);
    }
    //copied the note for reference (pretty interesting)
    /* Note: The ideal version of this solution
       * would instead use a transformed border,
       * to avoid using a real character.
       *
       * For example, something like this:
       *
       *    content: '';
       *    display: inline-block;
       *    transform: rotate(15deg);
       *    border-right: 1px solid;
       *    margin-right: var(--spacing);
       *    height: 0.8em;
       */
  }
`;

const CrumbLink = styled.a`
  color: #094067;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

export { Breadcrumbs, Crumb }