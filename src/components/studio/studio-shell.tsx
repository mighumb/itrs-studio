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
    <div className="flex h-screen flex-col overflow-hidden">
      <StudioHeader />
      <div className="relative flex min-h-0 flex-1">
        <StudioSidebar />
        <StudioCanvas />
        <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
      </div>
      {!chatOpen && (
        <AiAssistantFab onClick={() => setChatOpen(true)} />
      )}
    </div>
  );
}
