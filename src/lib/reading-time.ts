const WORDS_PER_MINUTE = 200;

const flattenPortableText = (blocks: unknown[] = []) => {
  return blocks
    .map((block) => {
      if (typeof block === "object" && block && "children" in block) {
        const children = (block as { children?: { text?: string }[] })
          .children;
        return children?.map((child) => child.text ?? "").join(" ") ?? "";
      }
      return "";
    })
    .join(" ");
};

export const estimateReadingTime = (blocks?: unknown[]) => {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  const text = flattenPortableText(blocks);
  const words = text.trim().split(/\s+/).filter(Boolean).length;

  if (!words) {
    return null;
  }

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};
