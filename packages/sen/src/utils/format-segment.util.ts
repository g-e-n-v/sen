import { REGEX_DYNAMIC_SEGMENT, REGEX_GROUP_SEGMENT } from "@/constants/regex.constant";

export function formatSegment(segment: string) {
  if (segment.match(REGEX_GROUP_SEGMENT)) {
    return "";
  }

  if (segment.match(REGEX_DYNAMIC_SEGMENT)) {
    return `:${segment.slice(1, -1)}`;
  }

  return segment;
}
