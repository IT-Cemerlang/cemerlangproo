'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LanguageSwitcher() {
  // This is a placeholder. In a real app, you'd use a i18n library
  // and have state to change the language.
  const handleLanguageChange = (lang: string) => {
    // router.push(pathname, { locale: lang })
    alert(`Language switched to ${lang}. Implementation with a routing library is needed.`);
  };

  return (
    <Select defaultValue="id" onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px] text-white bg-transparent border-white">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="id">Indonesia</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
