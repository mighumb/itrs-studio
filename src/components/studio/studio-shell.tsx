"use client";

import { useState } from "react";
import { StudioHeader } from "./studio-header";
import { StudioSidebar } from "./studio-sidebar";
import { StudioCanvas } from "./studio-canvas";
import { AiAssistantFab } from "./ai-assistant-fab";
import { ChatPanel } from "./chat-panel";

export function StudioShell() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <StudioCanvas />
      <StudioHeader />
      <StudioSidebar />
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
      {!chatOpen && (
        <AiAssistantFab onClick={() => setChatOpen(true)} />
      )}
    </div>
  );
}
