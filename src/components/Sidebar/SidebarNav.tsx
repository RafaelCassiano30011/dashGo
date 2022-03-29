import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAl">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          DashBoard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuarios
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMACAO">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Formularios
        </NavLink>
        <NavLink icon={RiGitMergeFill} href="/automation">
          Automaçâo
        </NavLink>
      </NavSection>
    </Stack>
  );
};
