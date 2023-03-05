import { Router } from 'express';

import { UnitController } from './unit.controller';

const unitController = new UnitController();

export const router = Router();

router.route('/:topicId').get(unitController.getUnits.bind(unitController));

export { router as unitRouter };
