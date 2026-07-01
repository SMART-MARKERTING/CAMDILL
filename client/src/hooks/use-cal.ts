import { useEffect, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "cdill/15min";
const CAL_NAMESPACE = "cdill-15min";

export function useCalModal() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { layout: "month_view", hideEventTypeDetails: false });
    })();
  }, []);

  const openCal = useCallback(async () => {
    const cal = await getCalApi({ namespace: CAL_NAMESPACE });
    cal("modal", { calLink: CAL_LINK, config: { layout: "month_view" } });
  }, []);

  return openCal;
}
