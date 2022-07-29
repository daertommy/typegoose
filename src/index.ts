import mongoose from 'mongoose';
import { DecoratorKeys } from './internal/constants.js';
import { getName } from './internal/utils.js';
import { logger } from './logSettings.js';
import type { BeAnObject, IIndexArray, IndexOptions } from './types.js';

/**
 * Defines a index for this Class which will then be added to the Schema.
 * @param fields Which fields to index (if multiple fields are set, it will be a compound index)
 * @param options Options to pass to MongoDB driver's createIndex() function
 * @example Example:
 * ```ts
 * @index({ article: 1, user: 1 }, { unique: true })
 * class ClassName {}
 * ```
 */
export function index<T extends BeAnObject = BeAnObject>(fields: mongoose.IndexDefinition, options?: IndexOptions<T>): ClassDecorator {
  return (target: any) => {
    logger.info('Adding "%o" Indexes to %s', { fields, options }, getName(target));
    const indices: IIndexArray[] = Array.from(Reflect.getMetadata(DecoratorKeys.Index, target) ?? []);
    indices.push({ fields, options });
    Reflect.defineMetadata(DecoratorKeys.Index, indices, target);
  };
}

// Export it PascalCased
export { index as Index };
