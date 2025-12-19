import { BuildingOfficeIcon, UserIcon } from "@heroicons/react/24/solid";
import { SerializedOrgWithProfiles } from "core/config/ProfileLifecycleManager";
import { isOnPremSession } from "core/control-plane/AuthTypes";
import { useContext } from "react";
import { Card } from "../../../components/ui";
import { useAuth } from "../../../context/Auth";
import { IdeMessengerContext } from "../../../context/IdeMessenger";

function getOrgIcon(org: { name: string; iconUrl?: string | null }) {
  if (org.iconUrl) {
    return (
      <img
        src={org.iconUrl}
        alt=""
        className="h-5 w-5 flex-shrink-0 rounded-full"
      />
    );
  }

  const IconComponent = org.name === "Personal" ? UserIcon : BuildingOfficeIcon;
  return <IconComponent className="h-5 w-5 flex-shrink-0" />;
}

export function OrganizationsSection() {
  const { organizations, session } = useAuth();
  const ideMessenger = useContext(IdeMessengerContext);

  const shouldRenderOrgInfo =
    session && organizations.length > 1 && !isOnPremSession(session);

  function handleAddOrganization() {
    void ideMessenger.request("controlPlane/openUrl", {
      path: "/organizations/new",
    });
  }

  function handleConfigureOrganization(org: SerializedOrgWithProfiles) {
    let path: string;
    if (org.id === "personal" || org.slug === undefined) {
      path = "/settings";
    } else {
      path = `/organizations/${org.slug}/settings`;
    }
    void ideMessenger.request("controlPlane/openUrl", {
      path,
    });
  }

  if (!shouldRenderOrgInfo) {
    return (
      <>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="mb-0 text-xl font-semibold">Organizations</h2>
          </div>
        </div>
        <Card>
          <div className="text-description py-8 text-center text-sm">
            Organizations are only available with cloud accounts. Sign in to
            manage organizations.
          </div>
        </Card>
      </>
    );
  }

  return;
}
