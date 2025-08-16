import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

interface BreadcrumbProps {
  items: {
    title: string;
    href?: string;
  }[];
}

export function BreadCrumb({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink className="hover:text-white" href={item.href}>
                  {item.title}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="max-w-[250px] text-gray-200 line-clamp-1">
                  {item.title}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>

            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
