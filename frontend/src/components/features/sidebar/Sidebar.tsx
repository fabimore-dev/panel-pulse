import { BrandSection } from './BrandSection';
import { NavigationMenu } from './NavigationMenu';
import { SettingsButton } from './SettingsButton';
import { IndiumLogo } from './IndiumLogo';

export function Sidebar() {
  return (
    <aside className="w-[260px] shrink-0 bg-bg-surface border-r border-white/[0.07] flex flex-col h-full overflow-y-auto p-5">
      {/* Brand */}
      <BrandSection />

      {/* Navigation */}
      <NavigationMenu />

      {/* Spacer */}
      <div className="flex-1" />

      {/* Settings */}
      <div className="pt-4 border-t border-white/[0.07]">
        <SettingsButton />
      </div>

      {/* Footer — Indium branding */}
      <footer className="pt-4 flex justify-center">
        <IndiumLogo className="w-28 opacity-60 hover:opacity-90 transition-opacity" />
      </footer>
    </aside>
  );
}
