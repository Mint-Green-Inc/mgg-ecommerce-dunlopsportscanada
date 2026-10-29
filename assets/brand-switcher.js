// Brand Switcher Dropdown — mobile nav
(function () {
  function attachListener() {
    // Use the section wrapper which is always in the DOM
    const section = document.querySelector('[class*="mobile_menu"]');
    if (!section || section._brandSwitcherAttached) return;
    section._brandSwitcherAttached = true;

    section.addEventListener('click', function (e) {
      const trigger = e.target.closest('.brand-switcher__trigger');
      const dropdown = document.getElementById('brand-switcher-dropdown');
      if (!dropdown) return;

      if (trigger) {
        e.stopPropagation();
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!expanded));
        dropdown.hidden = expanded;
        return;
      }

      // Close if clicking outside
      if (!e.target.closest('.brand-switcher--mobile')) {
        const openTrigger = section.querySelector('.brand-switcher__trigger[aria-expanded="true"]');
        if (openTrigger) {
          openTrigger.setAttribute('aria-expanded', 'false');
          dropdown.hidden = true;
        }
      }
    });
  }

  // Run immediately and after DOM ready
  attachListener();
  document.addEventListener('DOMContentLoaded', attachListener);
  document.addEventListener('shopify:section:load', attachListener);
})();
